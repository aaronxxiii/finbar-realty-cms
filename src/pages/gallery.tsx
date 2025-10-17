import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header } from "@/components/header"

const GalleryPage: React.FC<PageProps> = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Gallery</h1>
          <div className="prose prose-lg max-w-none">
            <p>Browse our gallery of beautiful properties and real estate photography.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default GalleryPage

export const Head: HeadFC = () => <title>Gallery - Finbar Realty</title>
