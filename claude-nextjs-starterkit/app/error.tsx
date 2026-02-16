'use client'

import { useEffect } from "react"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <section className="min-h-screen flex items-center py-20">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>

            <h1 className="mb-2 text-2xl font-bold">Something went wrong!</h1>
            <p className="mb-8 text-muted-foreground">
              We encountered an error while processing your request. Please try again or
              contact support if the problem persists.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button onClick={() => reset()}>Try again</Button>
              <a href="/">
                <Button variant="outline" className="w-full">
                  Go home
                </Button>
              </a>
            </div>

            {process.env.NODE_ENV === "development" && error.message && (
              <div className="mt-8 rounded-lg bg-muted p-4 text-left">
                <p className="text-xs font-mono text-muted-foreground break-all">
                  {error.message}
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  )
}
