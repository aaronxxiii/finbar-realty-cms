import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Header } from "@/components/header"

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Our Projects</h1>
          <div className="prose prose-lg max-w-none">
            <p>Explore our portfolio of successful real estate projects and developments.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Projects - Finbar Realty</title>
