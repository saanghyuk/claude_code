import { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | Modern Web Starter Kit",
  description: "Simple, transparent pricing for the Modern Web Starter Kit",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      price: "$0",
      period: "forever",
      features: [
        "Starter kit access",
        "Core components",
        "Community support",
        "Basic documentation",
      ],
    },
    {
      name: "Pro",
      description: "For professional developers",
      price: "$29",
      period: "per month",
      popular: true,
      features: [
        "Everything in Free",
        "Premium components",
        "Advanced documentation",
        "Email support",
        "Custom themes",
        "Early access to updates",
      ],
    },
    {
      name: "Enterprise",
      description: "For large teams",
      price: "Custom",
      period: "contact us",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Custom development",
        "SLA guarantee",
        "Priority bug fixes",
        "Training sessions",
      ],
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your needs
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative border-border p-8 transition-all ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4">Most Popular</Badge>
                )}

                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-2 text-muted-foreground">/{plan.period}</span>
                </div>

                <Button className="w-full mb-8" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can I upgrade or downgrade my plan?",
                  a: "Yes, you can change your plan at any time. Changes take effect on your next billing cycle.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, start with our Free plan. No credit card required to explore the starter kit.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
                },
              ].map((faq) => (
                <Card key={faq.q} className="border-border p-6">
                  <h4 className="mb-3 font-semibold">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
