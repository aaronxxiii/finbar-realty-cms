---
type: "always_apply"
---

# Finbar Realty CMS - Coding Standards & Best Practices

You are an expert in TypeScript, Gatsby, React, Shadcn UI, Radix UI and Tailwind CSS.

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoaded, hasError)
- Structure files in this order: exported page/component, GraphQL queries, helper functions, static content, TypeScript types/interfaces

## Naming Conventions

- Use lowercase with dashes for directories (e.g., components/property-card)
- Favor named exports for components and utilities
- Prefix GraphQL query hook files with "use" (e.g., useSiteMetadata.ts)

## TypeScript Usage

- Use TypeScript for all code; prefer interfaces over types for object shapes
- Avoid enums; use const objects or maps instead
- Avoid using `any` or `unknown` unless absolutely necessary; search for existing type definitions in the codebase first
- Avoid type assertions with `as` or `!` non-null assertions; prefer proper type guards
- Use functional components with TypeScript interfaces

## Syntax and Formatting

- Use the "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements
- Use declarative JSX, keeping JSX minimal and readable

## UI and Styling

- Use Tailwind CSS for utility-based styling (Tailwind v4 is installed)
- Implement responsive design with a mobile-first approach
- Use Shadcn UI components where applicable (configured with New York style)
- Follow the established component structure in @/components/ui
- Use the configured aliases: @/components, @/lib/utils, @/lib, @/hooks

## Gatsby Best Practices

### Data Fetching and GraphQL
- Use Gatsby's `useStaticQuery` hook for querying GraphQL data at build time in components
- Use `gatsby-node.ts` for programmatically creating pages based on data sources
- Use GraphQL fragments to reuse query logic across components
- Structure GraphQL queries clearly and use meaningful query names

### Navigation and Routing
- Utilize Gatsby's `Link` component from `gatsby` for internal navigation to ensure preloading
- For static pages that don't need programmatic creation, place them in `src/pages/`
- Use proper TypeScript interfaces for page props and context

### Image Optimization
- Optimize images using `gatsby-plugin-image` with `StaticImage` or `GatsbyImage` components
- Use `gatsby-transformer-sharp` and `gatsby-plugin-sharp` for image processing
- Implement proper alt text and responsive image handling

### Configuration and Environment
- Store sensitive data in environment variables, loaded via `gatsby-config.ts`
- Use `.env.development` and `.env.production` for environment-specific variables
- Utilize `gatsby-browser.js` for browser-specific APIs (e.g., wrapRootElement, wrapPageElement)
- Utilize `gatsby-ssr.js` for server-side rendering APIs

### Performance and Optimization
- Implement caching strategies using `gatsby-plugin-offline` for PWA support
- Leverage Gatsby's automatic code splitting and prefetching
- Optimize Web Vitals (LCP, CLS, FID) using Gatsby's built-in performance features
- Use dynamic imports for non-critical components when appropriate

## File Structure Guidelines

```
src/
├── components/
│   ├── ui/           # Shadcn UI components
│   └── [feature]/    # Feature-specific components
├── pages/            # Static pages and programmatic page templates
├── lib/              # Utility functions and configurations
├── hooks/            # Custom React hooks
├── styles/           # Global styles and Tailwind CSS
├── images/           # Static images and assets
└── gatsby-types.d.ts # Generated GraphQL types
```

## Key Conventions

- Follow the mobile-first responsive design approach
- Use semantic HTML elements for accessibility
- Implement proper error boundaries and loading states
- Use consistent spacing and typography scales from Tailwind
- Leverage Gatsby's built-in SEO capabilities with proper meta tags

## Dependencies and Plugins

Current key dependencies:
- Gatsby 5.14.1 with TypeScript support
- Tailwind CSS v4 with PostCSS integration
- Shadcn UI with Radix UI components
- Gatsby plugins: image, sharp, MDX, manifest, sitemap
- Decap CMS integration

## Documentation References

- Gatsby Documentation: https://www.gatsbyjs.com/docs/
- Tailwind CSS v4: https://tailwindcss.com/docs
- Shadcn UI: https://ui.shadcn.com/
- TypeScript: https://www.typescriptlang.org/docs/

## Code Examples

### Component Structure
```typescript
// src/components/property-card/PropertyCard.tsx
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

interface PropertyCardProps {
  title: string
  price: number
  imageData: any
  slug: string
}

export function PropertyCard({ title, price, imageData, slug }: PropertyCardProps) {
  return (
    <Link to={`/properties/${slug}`} className="block hover:shadow-lg transition-shadow">
      <div className="bg-white rounded-lg overflow-hidden">
        <GatsbyImage image={imageData} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xl font-bold text-green-600">${price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  )
}
```

### GraphQL Query Hook
```typescript
// src/hooks/useSiteMetadata.ts
import { useStaticQuery, graphql } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
  siteUrl: string
}

export function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)
  
  return data.site.siteMetadata
}
```

Follow these guidelines consistently throughout the codebase to maintain high code quality and developer experience.
