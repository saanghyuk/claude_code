import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

export function CTA() {
  return (
    <section className="border-t border-border py-20 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-border bg-gradient-to-br from-primary/5 via-background to-primary/5 px-6 py-16 sm:px-12 md:py-24">
          <div className="absolute inset-0 bg-grid-small-white/10" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build something amazing?
            </h2>

            <p className="mb-8 text-lg text-muted-foreground">
              Get started with the modern web starter kit. Everything is already
              configured and ready to go.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/docs">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Star on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
