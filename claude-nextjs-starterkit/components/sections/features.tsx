'use client'

import {
  Rocket,
  Moon,
  Smartphone,
  Shield,
  Eye,
  Zap,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/layout/container"
import { featuresData } from "@/lib/features-data"

const iconMap = {
  Rocket,
  Moon,
  Smartphone,
  Shield,
  Eye,
  Zap,
}

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-border bg-background py-20 md:py-32"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete modern web development foundation with the tools and
            patterns that matter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-border p-6 transition-all hover:shadow-lg hover:border-primary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col gap-4">
                  {/* Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {Icon && (
                      <Icon className="h-6 w-6 text-primary" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
