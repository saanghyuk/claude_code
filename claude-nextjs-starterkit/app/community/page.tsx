import { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, MessageSquare, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Community | Modern Web Starter Kit",
  description: "Join our community of developers",
}

export default function CommunityPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Join Our Community
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect with developers, share ideas, and learn together
            </p>
          </div>
        </Container>
      </section>

      {/* Community Channels */}
      <section className="border-b border-border py-20 md:py-32">
        <Container>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Connect With Us</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">GitHub</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Star us, report issues, and contribute code
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  Visit GitHub
                </Button>
              </a>
            </Card>

            <Card className="border-border p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Discussions</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Ask questions and share ideas with the community
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  Join Discussions
                </Button>
              </a>
            </Card>

            <Card className="border-border p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">Community</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Connect with other developers using the starter kit
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Guidelines */}
      <section className="bg-muted/30 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">Community Guidelines</h2>

            <div className="space-y-6">
              {[
                {
                  title: "Be Respectful",
                  description:
                    "Treat all community members with respect and kindness",
                },
                {
                  title: "No Spam",
                  description:
                    "Do not post promotional content or spam in discussions",
                },
                {
                  title: "Share Knowledge",
                  description: "Help others and share your knowledge and experience",
                },
                {
                  title: "Follow Code of Conduct",
                  description: "All members must follow our community code of conduct",
                },
              ].map((guideline) => (
                <Card key={guideline.title} className="border-border p-6">
                  <h3 className="mb-2 font-semibold">{guideline.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {guideline.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
