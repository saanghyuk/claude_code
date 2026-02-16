import { Metadata } from "next"
import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "License | Modern Web Starter Kit",
  description: "Software license for Modern Web Starter Kit",
}

export default function LicensePage() {
  return (
    <main>
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-12 text-4xl font-bold">MIT License</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-4">
                  Copyright (c) 2024 Modern Web Starter Kit Contributors
                </p>
                <p>
                  Permission is hereby granted, free of charge, to any person obtaining a copy of
                  this software and associated documentation files (the "Software"), to deal in the
                  Software without restriction, including without limitation the rights to use, copy,
                  modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
                  and to permit persons to whom the Software is furnished to do so, subject to the
                  following conditions:
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Conditions</h2>
                <p>
                  The above copyright notice and this permission notice shall be included in all copies
                  or substantial portions of the Software.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
                <p>
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
                  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
                  CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
                  OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Licenses</h2>
                <p className="mb-6">
                  This project includes the following third-party software:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      name: "Next.js",
                      license: "MIT",
                      url: "https://github.com/vercel/next.js",
                    },
                    {
                      name: "React",
                      license: "MIT",
                      url: "https://github.com/facebook/react",
                    },
                    {
                      name: "Tailwind CSS",
                      license: "MIT",
                      url: "https://github.com/tailwindlabs/tailwindcss",
                    },
                    {
                      name: "shadcn/ui",
                      license: "MIT",
                      url: "https://github.com/shadcn-ui/ui",
                    },
                  ].map((dep) => (
                    <div key={dep.name} className="text-sm">
                      <a
                        href={dep.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary hover:underline"
                      >
                        {dep.name}
                      </a>
                      <span> - {dep.license} License</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
