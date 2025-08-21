import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    if (
      process.env.NODE_ENV === "production" &&
      (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET)
    ) {
      return NextResponse.json({ error: "Webhook system not configured" }, { status: 500 })
    }

    let stripe
    try {
      if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error("STRIPE_SECRET_KEY not configured")
      }
      const Stripe = (await import("stripe")).default
      stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-10-16",
      })
    } catch (error) {
      console.error("Failed to initialize Stripe:", error)
      return NextResponse.json({ error: "Webhook system not configured" }, { status: 500 })
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 })
    }

    const body = await request.text()
    const signature = request.headers.get("stripe-signature")

    let event

    try {
      event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    const supabase = await createClient()

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object
        const userId = session.metadata.userId

        // Get subscription details
        const subscription = await stripe.subscriptions.retrieve(session.subscription)

        // Determine plan type based on price ID
        let planType = "starter"
        if (subscription.items.data[0].price.id === process.env.STRIPE_PROFESSIONAL_PRICE_ID) {
          planType = "professional"
        } else if (subscription.items.data[0].price.id === process.env.STRIPE_ENTERPRISE_PRICE_ID) {
          planType = "enterprise"
        }

        // Create subscription record
        await supabase.from("subscriptions").insert({
          user_id: userId,
          plan_type: planType,
          status: "active",
          current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        })

        break

      case "invoice.payment_succeeded":
        // Handle successful subscription renewal
        const invoice = event.data.object
        const subscriptionId = invoice.subscription

        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId)

          await supabase
            .from("subscriptions")
            .update({
              status: "active",
              current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            })
            .eq("user_id", subscription.metadata?.userId)
        }

        break

      case "invoice.payment_failed":
        // Handle failed payment
        const failedInvoice = event.data.object
        const failedSubscriptionId = failedInvoice.subscription

        if (failedSubscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(failedSubscriptionId)

          await supabase
            .from("subscriptions")
            .update({ status: "past_due" })
            .eq("user_id", subscription.metadata?.userId)
        }

        break

      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
