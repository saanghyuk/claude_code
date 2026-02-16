import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

export default function NotFound() {
  return (
    <main>
      <section className="min-h-screen flex items-center py-20">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
              <AlertCircle className="h-8 w-8 text-primary" />
            </div>

            <h1 className="mb-4 text-5xl font-bold">404</h1>
            <h2 className="mb-4 text-2xl font-bold">Page Not Found</h2>

            <p className="mb-8 text-muted-foreground">
              Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/">
                <Button className="w-full">Back to Home</Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" className="w-full">
                  Documentation
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-12 border-t border-border">
              <p className="mb-6 text-sm font-semibold">Popular Pages</p>
              <nav className="flex flex-col gap-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Features", href: "/features" },
                  { label: "About", href: "/about" },
                  { label: "Docs", href: "/docs" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
