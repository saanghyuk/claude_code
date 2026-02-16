import { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { Github, Twitter, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Modern Web Starter Kit",
  description: "Learn about the Modern Web Starter Kit and its mission",
}

export default function AboutPage() {
  const team = [
    {
      name: "Design Philosophy",
      role: "Beautiful & Accessible",
      description: "Built with accessibility first. Every component follows WCAG guidelines.",
      icon: "🎨",
    },
    {
      name: "Developer Experience",
      role: "TypeScript First",
      description: "Full TypeScript support with excellent IDE integration and type safety.",
      icon: "⚡",
    },
    {
      name: "Performance",
      role: "Lightning Fast",
      description: "Optimized for speed with code splitting, lazy loading, and more.",
      icon: "🚀",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              About Our Starter Kit
            </h1>
            <p className="text-lg text-muted-foreground">
              A modern foundation for building web applications with confidence.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="border-b border-border py-20 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe that starting a new web project shouldn&apos;t require weeks of
                configuration and setup. That&apos;s why we created this starter kit.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every component is battle-tested, accessible, and built with best
                practices. Focus on building your application, not configuring tools.
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <h3 className="font-semibold text-lg mb-4">Key Principles</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Production-ready from day one</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>No configuration overhead</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Accessible & performant</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Modern tech stack</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="border-b border-border bg-muted/30 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="text-muted-foreground">
              What we believe in and how we approach development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((value) => (
              <Card key={value.name} className="p-6 border-border">
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{value.name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{value.role}</p>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-center">
              Built With Modern Technologies
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "Next.js 16", description: "React framework for production" },
                { name: "React 19", description: "Latest React with hooks" },
                { name: "TypeScript 5", description: "Full type safety" },
                { name: "Tailwind CSS v4", description: "Utility-first styling" },
                { name: "ShadcnUI", description: "Accessible components" },
                { name: "next-themes", description: "Theme management" },
              ].map((tech) => (
                <div key={tech.name} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <h4 className="font-semibold">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
