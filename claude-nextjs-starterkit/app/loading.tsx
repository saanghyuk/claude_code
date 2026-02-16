import { Container } from "@/components/layout/container"

export default function Loading() {
  return (
    <main>
      <section className="min-h-screen py-20 md:py-32">
        <Container>
          <div className="space-y-12">
            {/* Skeleton Title */}
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <div className="h-12 w-3/4 mx-auto bg-muted rounded-lg animate-pulse" />
              <div className="h-6 w-5/6 mx-auto bg-muted rounded-lg animate-pulse" />
            </div>

            {/* Skeleton Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4 p-6 border border-border rounded-lg">
                  <div className="h-12 w-12 bg-muted rounded-lg animate-pulse" />
                  <div className="h-6 w-3/4 bg-muted rounded-lg animate-pulse" />
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="h-4 w-full bg-muted rounded-lg animate-pulse" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
