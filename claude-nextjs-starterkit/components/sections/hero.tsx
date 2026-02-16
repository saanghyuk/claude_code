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
            <div className="relative overflow-hidden rounded-lg border border-border bg-muted/50">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm">
                    Beautiful dashboard preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
