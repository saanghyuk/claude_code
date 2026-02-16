import { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Modern Web Starter Kit",
  description: "Join our team and help build the future of web development",
}

export default function CareersPage() {
  const jobs = [
    {
      title: "Frontend Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Help us build amazing user interfaces with React and Next.js",
    },
    {
      title: "Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      description: "Work on both frontend and backend to create great experiences",
    },
    {
      title: "Developer Advocate",
      location: "Remote",
      type: "Full-time",
      description: "Help developers succeed with our starter kit through content and community",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              We're Hiring
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our team and help shape the future of web development
            </p>
          </div>
        </Container>
      </section>

      {/* Why Join Us */}
      <section className="border-b border-border py-20 md:py-32">
        <Container>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Why Join Us?</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Remote Work",
                description: "Work from anywhere in the world",
              },
              {
                title: "Flexible Hours",
                description: "Flexible schedules that work for you",
              },
              {
                title: "Learning Budget",
                description: "Invest in your professional development",
              },
              {
                title: "Health Benefits",
                description: "Comprehensive health and wellness coverage",
              },
              {
                title: "Equity",
                description: "Own a piece of the company",
              },
              {
                title: "Team Culture",
                description: "Work with talented, collaborative people",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="border-border p-6">
                <h3 className="mb-2 font-semibold text-lg">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="border-b border-border py-20 md:py-32">
        <Container>
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Open Positions</h2>

          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.title} className="border-border p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {job.type}
                      </span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <p className="mb-6 text-muted-foreground">{job.description}</p>

                <Button>Apply Now</Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Don't see what you're looking for?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Send us your resume and tell us how you can help
            </p>
            <Button>Send Your Resume</Button>
          </div>
        </Container>
      </section>
    </main>
  )
}
