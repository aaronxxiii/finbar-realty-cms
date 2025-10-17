import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import { Header } from "@/components/header"

interface HomepageData {
  markdownRemark: {
    frontmatter: {
      title: string
      subtitle?: string
      videoBanner?: {
        videoFile?: string
        videoUrl?: string
        posterImage?: string
        altText?: string
      }
    }
    html: string
  }
}

interface IndexPageProps extends PageProps {
  data: HomepageData
}

function VideoBanner({ videoBanner }: { videoBanner?: HomepageData['markdownRemark']['frontmatter']['videoBanner'] }) {
  if (!videoBanner || (!videoBanner.videoFile && !videoBanner.videoUrl)) {
    return null
  }

  const videoSrc = videoBanner.videoFile || videoBanner.videoUrl || ""
  
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={videoBanner.posterImage || undefined}
        aria-label={videoBanner.altText || "Video banner"}
      >
        <source src={videoSrc} type="video/mp4" />
        <p className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
          Your browser does not support the video tag.
        </p>
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </section>
  )
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Video Banner */}
      <VideoBanner videoBanner={frontmatter.videoBanner} />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {frontmatter.title}
          </h1>
          {frontmatter.subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {frontmatter.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC<HomepageData> = ({ data }) => (
  <>
    <title>{data.markdownRemark.frontmatter.title}</title>
    <meta name="description" content={data.markdownRemark.frontmatter.subtitle || "Welcome to Finbar Realty"} />
  </>
)

export const query = graphql`
  query HomepageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "homepage" } }) {
      frontmatter {
        title
        subtitle
        videoBanner {
          videoFile
          videoUrl
          posterImage
          altText
        }
      }
      html
    }
  }
`
