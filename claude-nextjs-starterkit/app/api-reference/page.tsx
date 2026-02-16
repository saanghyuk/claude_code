import { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "API Reference | Modern Web Starter Kit",
  description: "Complete API reference documentation",
}

export default function ApiReferencePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              API Reference
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete guide to the Modern Web Starter Kit APIs
            </p>
          </div>
        </Container>
      </section>

      {/* API Documentation */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold">Components API</h2>

            <div className="space-y-8">
              <Card className="border-border p-6">
                <h3 className="mb-4 text-xl font-bold">Button Component</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm mb-4">
                  <code>{`<Button
  variant="default" | "outline" | "ghost"
  size="sm" | "default" | "lg"
  onClick={() => {}}
>
  Click me
</Button>`}</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  A versatile button component with multiple variants and sizes
                </p>
              </Card>

              <Card className="border-border p-6">
                <h3 className="mb-4 text-xl font-bold">Card Component</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm mb-4">
                  <code>{`<Card>
  <div>Your content here</div>
</Card>`}</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  A simple card container with consistent styling
                </p>
              </Card>

              <Card className="border-border p-6">
                <h3 className="mb-4 text-xl font-bold">Container Component</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm mb-4">
                  <code>{`<Container>
  <div>Your content here</div>
</Container>`}</code>
                </pre>
                <p className="text-sm text-muted-foreground">
                  Responsive container with max-width and padding
                </p>
              </Card>
            </div>

            <h2 className="mt-16 mb-8 text-2xl font-bold">Theme API</h2>

            <Card className="border-border p-6">
              <h3 className="mb-4 text-xl font-bold">useTheme Hook</h3>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm mb-4">
                <code>{`const { theme, setTheme } = useTheme()

// theme: "light" | "dark" | "system"
// setTheme(theme: string): void`}</code>
              </pre>
              <p className="text-sm text-muted-foreground">
                Access and manage the current theme
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  )
}
