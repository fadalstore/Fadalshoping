import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  if (typeof window === "undefined" && !process.env.VERCEL_ENV && !process.env.NODE_ENV) {
    return NextResponse.json({ error: "Service temporarily unavailable" }, { status: 503 })
  }

  try {
    if (process.env.NODE_ENV === "production" && !process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Payment system not configured" }, { status: 500 })
    }

    let stripe
    try {
      if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error("STRIPE_SECRET_KEY not configured")
      }
      if (typeof require === "undefined") {
        throw new Error("Runtime environment not ready")
      }
      const Stripe = (await import("stripe")).default
      stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-10-16",
      })
    } catch (error) {
      console.error("Failed to initialize Stripe:", error)
      return NextResponse.json({ error: "Payment system not configured" }, { status: 500 })
    }

    const { priceId, userId } = await request.json()

    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${request.nextUrl.origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/pricing`,
      metadata: {
        userId: user.id,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
