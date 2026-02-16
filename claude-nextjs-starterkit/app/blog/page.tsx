import { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Modern Web Starter Kit",
  description: "Latest news and articles about web development",
}

export default function BlogPage() {
  const posts = [
    {
      title: "Getting Started with Next.js 16",
      excerpt:
        "Learn the new features and improvements in Next.js 16, including faster builds and better performance.",
      date: "2024-02-15",
      category: "Next.js",
      slug: "nextjs-16-guide",
    },
    {
      title: "Tailwind CSS v4: What's New",
      excerpt:
        "Discover the latest features in Tailwind CSS v4 and how to migrate your existing projects.",
      date: "2024-02-10",
      category: "CSS",
      slug: "tailwind-v4-guide",
    },
    {
      title: "React 19: Key Features Explained",
      excerpt:
        "A deep dive into the new features and improvements that React 19 brings to your applications.",
      date: "2024-02-05",
      category: "React",
      slug: "react-19-features",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Latest updates, tips, and insights about web development
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="border-b border-border py-20 md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.slug} className="border-border p-6 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary uppercase">
                    {post.category}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold">{post.title}</h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="bg-muted/30 py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Updated</h2>
            <p className="mb-8 text-muted-foreground">
              Subscribe to our newsletter for the latest news and updates
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm"
              />
              <button className="rounded-lg bg-primary px-6 py-2 font-medium text-primary-foreground hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
