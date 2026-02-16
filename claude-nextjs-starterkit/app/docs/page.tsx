import { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Documentation | Modern Web Starter Kit",
  description: "Complete guide to using the Modern Web Starter Kit",
}

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      description: "Set up your project and start building in minutes",
      items: [
        { title: "Installation", href: "#installation" },
        { title: "Project Structure", href: "#structure" },
        { title: "Configuration", href: "#configuration" },
      ],
    },
    {
      title: "Components",
      description: "Learn about the pre-built components included",
      items: [
        { title: "UI Components", href: "#ui-components" },
        { title: "Layout Components", href: "#layout" },
        { title: "Section Components", href: "#sections" },
      ],
    },
    {
      title: "Development",
      description: "Best practices and development workflow",
      items: [
        { title: "Local Development", href: "#development" },
        { title: "Styling Guide", href: "#styling" },
        { title: "TypeScript Guide", href: "#typescript" },
      ],
    },
    {
      title: "Deployment",
      description: "Deploy your application to production",
      items: [
        { title: "Vercel Deploy", href: "#vercel" },
        { title: "Docker", href: "#docker" },
        { title: "Optimization", href: "#optimization" },
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
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn how to use the Modern Web Starter Kit to build amazing web applications.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Start */}
      <section className="border-b border-border py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Quick Start</h2>

            <div className="space-y-6">
              <Card className="border-border p-6">
                <h3 className="mb-2 font-semibold text-lg">1. Clone the Repository</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                  <code>git clone https://github.com/yourusername/modern-starter-kit</code>
                </pre>
              </Card>

              <Card className="border-border p-6">
                <h3 className="mb-2 font-semibold text-lg">2. Install Dependencies</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                  <code>npm install</code>
                </pre>
              </Card>

              <Card className="border-border p-6">
                <h3 className="mb-2 font-semibold text-lg">3. Start Development Server</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                  <code>npm run dev</code>
                </pre>
                <p className="mt-3 text-sm text-muted-foreground">
                  Open <a href="http://localhost:3000" className="font-semibold text-primary">http://localhost:3000</a> in your browser
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Documentation Sections */}
      <section className="border-b border-border py-20 md:py-32">
        <Container>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Documentation</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section) => (
              <Card key={section.title} className="border-border p-6">
                <h3 className="mb-2 font-semibold text-lg">{section.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{section.description}</p>

                <nav className="space-y-2">
                  {section.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      {item.title}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ))}
                </nav>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="border-b border-border bg-muted/30 py-20 md:py-32">
        <Container>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Key Features</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              "✓ Next.js 16 with React 19",
              "✓ TypeScript 5 for type safety",
              "✓ Tailwind CSS v4 with dark mode",
              "✓ ShadcnUI components included",
              "✓ Fully responsive design",
              "✓ WCAG accessible components",
            ].map((feature) => (
              <div key={feature} className="text-sm font-medium">
                {feature}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Support */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Need Help?</h2>
            <p className="mb-8 text-muted-foreground">
              Check out our resources or reach out to the community
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
              >
                GitHub Issues
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
              >
                GitHub Discussions
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
