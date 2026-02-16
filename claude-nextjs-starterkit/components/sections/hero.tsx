import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/layout/container"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <Badge variant="secondary" className="gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500" />
              Now Open Source
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            The Modern Web Starter Kit
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Production-ready foundation for any modern web project. Built with Next.js,
            React, TypeScript, and Tailwind CSS.
          </p>

          {/* Description */}
          <p className="mb-12 text-base text-muted-foreground md:text-lg">
            Everything you need to start building great web applications. No more
            setup overhead, focus on what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#features">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                View on GitHub
              </Button>
            </a>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 md:mt-24">
            <div className="relative overflow-hidden rounded-lg border border-border bg-muted/50 shadow-2xl">
              {/* Dashboard Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                {/* Dashboard Header */}
                <div className="border-b border-border/50 bg-background/50 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/20" />
                      <div className="h-2 w-24 rounded-full bg-muted" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 rounded-full bg-muted" />
                      <div className="h-8 w-8 rounded-lg bg-muted/50" />
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="grid gap-4 md:grid-cols-3 mb-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-border/50 bg-background/50 p-4"
                      >
                        <div className="mb-3 h-2 w-12 rounded-full bg-muted" />
                        <div className="h-6 w-20 rounded-full bg-primary/30" />
                        <div className="mt-2 h-2 w-16 rounded-full bg-muted/50" />
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-border/50 bg-background/50 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-2 w-32 rounded-full bg-muted" />
                      <div className="h-6 w-6 rounded-lg bg-muted/50" />
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-2 w-full rounded-full bg-muted/30" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Stats below preview */}
            <div className="mt-8 grid gap-6 sm:grid-cols-3 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
