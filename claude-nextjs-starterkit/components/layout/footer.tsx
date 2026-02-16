'use client'

import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { Container } from "./container"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/config"

const iconMap = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-full md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-primary to-primary/50 px-3 py-2">
                <span className="font-bold text-sm text-white">MSK</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Link groups */}
          {siteConfig.footerNav.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm mb-4">{group.title}</h4>
              <nav className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {siteConfig.socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.title}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
