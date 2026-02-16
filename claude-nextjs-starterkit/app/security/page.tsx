import { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Security | Modern Web Starter Kit",
  description: "Security features and best practices",
}

export default function SecurityPage() {
  const features = [
    {
      title: "Type Safety",
      description: "TypeScript ensures type safety across your entire application",
      icon: Shield,
    },
    {
      title: "WCAG Compliant",
      description: "All components follow WCAG 2.1 AA accessibility standards",
      icon: Eye,
    },
    {
      title: "Secure Defaults",
      description: "Built-in protection against common vulnerabilities",
      icon: Lock,
    },
    {
      title: "Regular Updates",
      description: "Security patches and updates delivered promptly",
      icon: AlertCircle,
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Security & Privacy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your application's security is our priority
            </p>
          </div>
        </Container>
      </section>

      {/* Security Features */}
      <section className="border-b border-border py-20 md:py-32">
        <Container>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Security Features</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Best Practices */}
      <section className="bg-muted/30 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Security Best Practices</h2>

            <ul className="space-y-4">
              {[
                "Keep dependencies up to date with npm audit",
                "Use environment variables for sensitive data",
                "Enable HTTPS for all connections",
                "Implement rate limiting on APIs",
                "Use secure authentication methods",
                "Validate all user input",
                "Enable CORS only for trusted domains",
                "Keep your API keys private",
              ].map((practice) => (
                <li key={practice} className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-1">✓</span>
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  )
}
