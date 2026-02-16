'use client'

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/config"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <nav className="flex flex-col gap-4 pt-8">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}

          <Separator className="my-2" />

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Theme</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          <Button className="w-full" onClick={() => setOpen(false)}>
            Get Started
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
