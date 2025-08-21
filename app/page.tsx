import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, FileText, DollarSign, Clock, BarChart3 } from "lucide-react"
import { PricingButton } from "@/components/pricing-button"

export default function InvoiceProLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">InvoicePro</h1>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#pricing"
                  className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-secondary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Support
                </a>
              </div>
            </nav>
            <div className="hidden md:block">
              <PricingButton
                priceId={process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_PRICE_ID || "price_professional"}
                planName="Professional"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started
              </PricingButton>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-muted py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Professional Invoicing
              <span className="text-secondary"> Made Simple</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Create, send, and track professional invoices in minutes. Get paid faster with automated reminders and
              seamless payment processing.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PricingButton
                priceId={process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_PRICE_ID || "price_professional"}
                planName="Professional"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start Free Trial
              </PricingButton>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-x-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-x-2">
                <Check className="h-4 w-4 text-secondary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Check className="h-4 w-4 text-secondary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Check className="h-4 w-4 text-secondary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to get paid
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful invoicing features designed for small businesses and freelancers
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Professional Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Beautiful, customizable invoice templates that reflect your brand and impress clients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <DollarSign className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Payment Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Accept payments online with integrated Stripe, PayPal, and bank transfer options.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Automated Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Never chase payments again with smart, automated follow-up reminders and notifications.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-card-foreground">Financial Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track your income, expenses, and cash flow with detailed financial reporting and analytics.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-muted py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by thousands of businesses
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">See what our customers have to say about InvoicePro</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4">
                  "InvoicePro has completely transformed how I handle billing. I get paid 40% faster now and spend 80%
                  less time on invoicing."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-secondary">MR</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-card-foreground">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Freelance Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4">
                  "The automated reminders are a game-changer. Our cash flow improved dramatically since we started
                  using InvoicePro."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-secondary">DT</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-card-foreground">David Thompson</p>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4">
                  "Professional templates and easy payment processing. My clients love how simple it is to pay their
                  invoices online."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-secondary">SK</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-card-foreground">Sarah Kim</p>
                    <p className="text-sm text-muted-foreground">Consultant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Choose the plan that's right for your business</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Starter</CardTitle>
                <CardDescription>Perfect for freelancers and solo entrepreneurs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Up to 10 invoices/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">5 clients</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Email support</span>
                  </li>
                </ul>
                <PricingButton
                  priceId={process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE_ID || "price_starter"}
                  planName="Starter"
                  variant="outline"
                  className="w-full mt-6"
                >
                  Start Free Trial
                </PricingButton>
              </CardContent>
            </Card>
            <Card className="border-secondary bg-card relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-card-foreground">Professional</CardTitle>
                <CardDescription>Best for growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Unlimited invoices</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Unlimited clients</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Premium templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Payment processing</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Automated reminders</span>
                  </li>
                </ul>
                <PricingButton
                  priceId={process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_PRICE_ID || "price_professional"}
                  planName="Professional"
                  variant="secondary"
                  className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Start Free Trial
                </PricingButton>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Enterprise</CardTitle>
                <CardDescription>For larger organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Multi-user access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Advanced reporting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-secondary mr-3" />
                    <span className="text-card-foreground">Priority support</span>
                  </li>
                </ul>
                <PricingButton
                  priceId={process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID || "price_enterprise"}
                  planName="Enterprise"
                  variant="outline"
                  className="w-full mt-6"
                >
                  Contact Sales
                </PricingButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to get paid faster?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join thousands of businesses already using InvoicePro to streamline their billing
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <PricingButton
              priceId={process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_PRICE_ID || "price_professional"}
              planName="Professional"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Start Your Free Trial
            </PricingButton>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/60">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">InvoicePro</h3>
              <p className="text-muted-foreground mb-4">
                Professional invoicing and billing software designed for small businesses and freelancers. Get paid
                faster with automated reminders and seamless payment processing.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-muted-foreground">© 2024 InvoicePro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
