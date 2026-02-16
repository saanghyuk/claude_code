import { Metadata } from "next"
import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "Privacy Policy | Modern Web Starter Kit",
  description: "Our privacy policy",
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-12 text-4xl font-bold">Privacy Policy</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p>
                  This Privacy Policy explains how Modern Web Starter Kit collects, uses,
                  discloses, and safeguards your information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we
                  may collect on the Site includes:
                </p>
                <ul className="list-inside list-disc space-y-2 mt-4">
                  <li>Personal Data: Voluntarily given information such as your name and email</li>
                  <li>Derivative Data: Information collected automatically as you use the Site</li>
                  <li>Financial Data: Financial information relevant to purchased services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth,
                  efficient, and customized experience. Specifically, we may use information collected
                  about you via the Site to:
                </p>
                <ul className="list-inside list-disc space-y-2 mt-4">
                  <li>Generate a personal profile about you</li>
                  <li>Increase the efficiency and operation of the Site</li>
                  <li>Monitor and analyze usage and trends to improve your experience</li>
                  <li>Notify you of updates to the Site</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclosure of Your Information</h2>
                <p>
                  We may share information we have collected about you in certain situations:
                </p>
                <ul className="list-inside list-disc space-y-2 mt-4">
                  <li>By Law or to Protect Rights</li>
                  <li>Third-Party Service Providers</li>
                  <li>Marketing Communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your
                  personal information. While we have taken reasonable steps to secure the personal
                  information you provide to us, please be aware that no security measures are perfect
                  or impenetrable.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4 font-semibold">privacy@example.com</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
