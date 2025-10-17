import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header } from "@/components/header"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About Us</h1>
          <div className="prose prose-lg max-w-none">
            <p>Learn more about Finbar Realty and our commitment to excellence in real estate services.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About - Finbar Realty</title>
