import { Metadata } from "next"
import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "Terms of Service | Modern Web Starter Kit",
  description: "Our terms of service",
}

export default function TermsPage() {
  return (
    <main>
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-12 text-4xl font-bold">Terms of Service</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide by the above, please
                  do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information
                  or software) on the Modern Web Starter Kit website for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a transfer of title,
                  and under this license you may not:
                </p>
                <ul className="list-inside list-disc space-y-2 mt-4">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Transmitting the materials to another location or copying the materials to another server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                <p>
                  The materials on the Modern Web Starter Kit website are provided on an 'as is'
                  basis. The site makes no warranties, expressed or implied, and hereby disclaims
                  and negates all other warranties including, without limitation, implied warranties
                  or conditions of merchantability, fitness for a particular purpose, or non-infringement
                  of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
                <p>
                  In no event shall the Modern Web Starter Kit or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of data or profit, or due
                  to business interruption) arising out of the use or inability to use the materials
                  on the Modern Web Starter Kit website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on the Modern Web Starter Kit website could include
                  technical, typographical, or photographic errors. The site does not warrant that
                  any of the materials on the website are accurate, complete, or current. The site
                  may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Modifications</h2>
                <p>
                  The site may revise these terms of service for its website at any time without
                  notice. By using this website, you are agreeing to be bound by the then current
                  version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the
                  laws of the jurisdiction in which the site is operated, and you irrevocably submit
                  to the exclusive jurisdiction of the courts located in that location.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
