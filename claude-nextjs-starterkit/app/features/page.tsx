import { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import {
  Rocket,
  Moon,
  Smartphone,
  Shield,
  Zap,
  Accessibility,
  GitBranch,
  Package,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Features | Modern Web Starter Kit",
  description: "Explore all the features included in the Modern Web Starter Kit",
}

const features = [
  {
    title: "Production Ready",
    description:
      "Built with industry best practices and proven technologies. Deploy with confidence from day one.",
    icon: Rocket,
    details: [
      "Optimized for performance",
      "SEO-friendly structure",
      "Error boundaries included",
      "Loading states implemented",
    ],
  },
  {
    title: "Dark Mode Support",
    description:
      "Seamless theme switching with automatic system detection. Perfect for any lighting condition.",
    icon: Moon,
    details: [
      "System theme detection",
      "localStorage persistence",
      "No flash of unstyled content",
      "Easy to customize",
    ],
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first approach ensures perfect experience on all devices and screen sizes.",
    icon: Smartphone,
    details: [
      "Mobile-first methodology",
      "Touch-friendly interactions",
      "Optimized for all breakpoints",
      "Tested on real devices",
    ],
  },
  {
    title: "Type Safe",
    description: "Built with TypeScript for maximum type safety and developer experience.",
    icon: Shield,
    details: [
      "Full TypeScript support",
      "Strict mode enabled",
      "Type-safe components",
      "Better IDE support",
    ],
  },
  {
    title: "Accessible",
    description: "WCAG compliant components ensure your app is usable by everyone.",
    icon: Accessibility,
    details: [
      "WCAG AA compliant",
      "Keyboard navigation",
      "Screen reader support",
      "Semantic HTML",
    ],
  },
  {
    title: "Performance Optimized",
    description: "Lightning-fast load times with optimized bundle sizes and lazy loading.",
    icon: Zap,
    details: [
      "Code splitting",
      "Image optimization",
      "Lazy loading",
      "Minimal JS bundle",
    ],
  },
  {
    title: "Component Library",
    description: "Pre-built, accessible components from ShadcnUI. No dependencies bloat.",
    icon: Package,
    details: [
      "Copy-paste components",
      "Full source control",
      "Customizable styling",
      "Radix UI primitives",
    ],
  },
  {
    title: "Developer Experience",
    description: "Fast refresh, great tooling, and excellent documentation out of the box.",
    icon: GitBranch,
    details: [
      "Fast refresh support",
      "ESLint configured",
      "Clear file structure",
      "Well-commented code",
    ],
  },
  {
    title: "Documentation",
    description: "Comprehensive documentation and examples to get you started quickly.",
    icon: FileText,
    details: [
      "Setup guide included",
      "Component examples",
      "Best practices",
      "Troubleshooting guide",
    ],
  },
]

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Packed With Features
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to build modern web applications, right out of the box.
            </p>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="group overflow-hidden border-border p-6 transition-all hover:shadow-lg hover:border-primary/50"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mb-2 font-semibold text-lg">{feature.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{feature.description}</p>

                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Ready to get started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Clone the repository and start building your next project today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View on GitHub
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
