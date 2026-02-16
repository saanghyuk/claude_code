import { LucideIcon } from "lucide-react"

export interface Feature {
  title: string
  description: string
  icon: string
}

export const featuresData: Feature[] = [
  {
    title: "Production Ready",
    description: "Built with industry best practices and proven technologies. Deploy with confidence.",
    icon: "Rocket",
  },
  {
    title: "Dark Mode Support",
    description: "Seamless theme switching with automatic system detection. Perfect for any lighting condition.",
    icon: "Moon",
  },
  {
    title: "Responsive Design",
    description: "Mobile-first approach ensures perfect experience on all devices and screen sizes.",
    icon: "Smartphone",
  },
  {
    title: "Type Safe",
    description: "Built with TypeScript for maximum type safety and developer experience.",
    icon: "Shield",
  },
  {
    title: "Accessible",
    description: "WCAG compliant components ensure your app is usable by everyone.",
    icon: "Eye",
  },
  {
    title: "Performance Optimized",
    description: "Lightning-fast load times with optimized bundle sizes and lazy loading.",
    icon: "Zap",
  },
]
