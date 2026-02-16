import { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  "nextjs-16-guide": {
    title: "Getting Started with Next.js 16",
    excerpt:
      "Learn the new features and improvements in Next.js 16, including faster builds and better performance.",
    date: "2024-02-15",
    category: "Next.js",
    slug: "nextjs-16-guide",
    content: `
Next.js 16 brings significant improvements to web development, including:

## Key Features

### Faster Build Times
The new compilation system reduces build times by up to 50%, making development workflows more efficient.

### Improved Performance
Better code splitting and tree-shaking result in smaller bundle sizes and faster page loads.

### Enhanced Developer Experience
New tooling and debugging capabilities make it easier to develop and debug Next.js applications.

### Better TypeScript Support
Full TypeScript support with improved type inference and documentation.

## Getting Started

To upgrade to Next.js 16, simply run:

\`\`\`bash
npm install next@16
\`\`\`

Then update your configuration and dependencies according to the migration guide.

## Conclusion

Next.js 16 represents a significant step forward in web development, providing developers with the tools they need to build fast, reliable applications.
    `,
  },
  "tailwind-v4-guide": {
    title: "Tailwind CSS v4: What's New",
    excerpt:
      "Discover the latest features in Tailwind CSS v4 and how to migrate your existing projects.",
    date: "2024-02-10",
    category: "CSS",
    slug: "tailwind-v4-guide",
    content: `
Tailwind CSS v4 introduces several new features and improvements that make it easier to build beautiful, responsive designs.

## New Features

### CSS Optimizer
The new CSS optimizer reduces the final bundle size and improves performance.

### Extended Color Palette
More predefined colors and customization options for your designs.

### Improved Configuration
Simplified configuration with better defaults and more flexibility.

### Container Queries
Native support for container queries without plugins.

## Migration Guide

Upgrading to Tailwind CSS v4 is straightforward:

\`\`\`bash
npm install -D tailwindcss@4
\`\`\`

Most existing projects will continue to work without changes, but some advanced configurations may need updates.

## Benefits

- Better performance
- Smaller CSS bundles
- More powerful styling capabilities
- Improved developer experience

## Conclusion

Tailwind CSS v4 is a major release that brings powerful new features while maintaining backward compatibility with existing projects.
    `,
  },
  "react-19-features": {
    title: "React 19: Key Features Explained",
    excerpt:
      "A deep dive into the new features and improvements that React 19 brings to your applications.",
    date: "2024-02-05",
    category: "React",
    slug: "react-19-features",
    content: `
React 19 introduces several groundbreaking features that improve the developer experience and application performance.

## Major Features

### Automatic Batching
State updates are now automatically batched for better performance.

### Transitions API
New API for handling async operations and UI updates gracefully.

### Concurrent Rendering
Better handling of long-running tasks and UI responsiveness.

### Improved Suspense
More powerful Suspense capabilities for data fetching and code splitting.

## Hook Improvements

### useTransition
Manage async operations and pending states with ease.

### useOptimistic
Optimistically update the UI before server confirmation.

### useFormStatus
Get form submission status and data automatically.

## Best Practices

1. Use automatic batching to your advantage for better performance
2. Leverage Transitions for a better user experience
3. Use Suspense for code splitting and data fetching
4. Take advantage of new hooks for common patterns

## Conclusion

React 19 represents a major step forward, providing developers with powerful tools to build fast, responsive applications with less boilerplate code.
    `,
  },
}

type Params = {
  slug: string
}

export async function generateMetadata(props: {
  params: Promise<Params>
}): Promise<Metadata> {
  const params = await props.params
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post Not Found | Modern Web Starter Kit",
    }
  }

  return {
    title: `${post.title} | Modern Web Starter Kit`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage(props: {
  params: Promise<Params>
}) {
  const params = await props.params
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main>
      {/* Back Link */}
      <section className="border-b border-border bg-background py-6">
        <Container>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4">
              <span className="text-xs font-semibold text-primary uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground">{post.excerpt}</p>

            <div className="mt-6 text-sm text-muted-foreground">
              Published on {post.date}
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    if (line.startsWith("## ")) {
                      return `<h2 className="text-2xl font-bold mt-8 mb-4">${line.substring(3)}</h2>`
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 className="text-xl font-bold mt-6 mb-3">${line.substring(4)}</h3>`
                    }
                    if (line.startsWith("- ")) {
                      return `<li className="ml-4 text-muted-foreground">${line.substring(2)}</li>`
                    }
                    if (line.startsWith("1. ")) {
                      return `<li className="ml-4 text-muted-foreground">${line.substring(3)}</li>`
                    }
                    if (line.startsWith("`")) {
                      return `<code className="bg-muted px-2 py-1 rounded text-sm">${line}</code>`
                    }
                    if (line.trim() === "") {
                      return "<br />"
                    }
                    return `<p className="text-muted-foreground mb-4">${line}</p>`
                  })
                  .join(""),
              }}
            />
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      <section className="border-t border-border bg-muted/30 py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>

            <div className="grid gap-6">
              {Object.values(blogPosts)
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group rounded-lg border border-border p-6 transition hover:border-primary hover:bg-background"
                  >
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-primary uppercase">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold group-hover:text-primary">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
