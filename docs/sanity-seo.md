
# Product Requirements Document (PRD): Sanity SEO Schema & Analysis Tool Integration

## 1. Project Overview
**Product Name:** Audora (AI 3D Isometric Icon Generator)
**Objective:** Implement a comprehensive SEO schema and real-time content analysis tool within Sanity Studio (V3) to empower content writers. The system must generate SEO metadata to be consumed by the Next.js (App Router) frontend.
**Tech Stack:** Sanity V3, Next.js (App Router), TypeScript, React.

## 2. Scope of Work
1. Install and configure `sanity-plugin-seo-pane` for real-time SEO analysis (keyword density, readability, title length) inside Sanity Studio.
2. Create a reusable custom `seo` object schema in Sanity.
3. Integrate the `seo` object and the SEO Pane analyzer into the existing `post` document schema.
4. Update the Next.js frontend to fetch this metadata via GROQ and inject it using Next.js `generateMetadata`.

## 3. Technical Requirements & Implementation Guide

### 3.1. Plugin Installation
AI Agent, please run the following command in the Sanity studio directory to install the required SEO analysis tool:
```bash
npm install sanity-plugin-seo-pane
```

### 3.2. Sanity Schema: `seo` Object (`schemas/objects/seo.ts`)
Create a dedicated object for SEO fields. 

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
      description: 'Main targeted keyword (e.g., "AI 3D generator"). Used for SEO analysis.',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Ideal length is 50–60 characters.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Ideal length is 150–160 characters.',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image displayed when sharing on social media (Facebook, Twitter, LinkedIn).',
      options: {
        hotspot: true,
      },
    }),
  ]
})
```

### 3.3. Sanity Schema: Update `post` Document (`schemas/documents/post.ts`)
Inject the `seo` object into the blog post schema.

```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // ... Existing fields (title, slug, body, language, etc.) ...
    
    // Inject the SEO object here
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo', // Optional: if using field groups
    })
  ]
})
```

### 3.4. Sanity Config: Setup SEO Pane (`sanity.config.ts` / Desk Structure)
Configure the Sanity Desk Structure to render the SEO Pane alongside the content editor. The plugin requires a resolve function to assemble the full URL of the post for analysis.

```typescript
import { SEOPane } from 'sanity-plugin-seo-pane'
import { DefaultDocumentNodeResolver } from 'sanity/desk'

// Replace with actual Audora production URL
const resolveProductionUrl = (doc: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || '[https://audora.com](https://audora.com)'
  // Account for bilingual routing if necessary
  const basePath = doc.language === 'id' ? '/id/blog/' : '/blog/'
  return `${baseUrl}${basePath}${doc.slug?.current}`
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(SEOPane)
        .options({
          keywords: `seo.focusKeyword`,
          synonyms: `seo.synonyms`,
          url: (doc: any) => resolveProductionUrl(doc),
        })
        .title('SEO Analysis'),
    ])
  }
  return S.document().views([S.view.form()])
}
```

### 3.5. Next.js Frontend Integration (`app/blog/[slug]/page.tsx`)
AI Agent, update the dynamic route to fetch the newly created SEO schema via GROQ and inject it into Next.js App Router metadata.

```typescript
import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'

// Add seo projection to existing GROQ query
const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  title,
  "seo": seo {
    focusKeyword,
    metaTitle,
    metaDescription,
    "ogImageUrl": ogImage.asset->url
  }
}`

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch(postQuery, { slug: params.slug })

  if (!post) return {}

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription,
    keywords: post.seo?.focusKeyword ? [post.seo.focusKeyword] : [],
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription,
      images: post.seo?.ogImageUrl ? [{ url: post.seo.ogImageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription,
      images: post.seo?.ogImageUrl ? [post.seo.ogImageUrl] : [],
    },
  }
}
```

## 4. Acceptance Criteria (DoD)
- [ ] Content writers can see specific SEO fields (Focus Keyword, Meta Title, Meta Description, OG Image) at the bottom of the Post editor in Sanity.
- [ ] The Sanity Studio UI displays a new tab or pane called "SEO Analysis" when editing a post.
- [ ] The SEO Analysis pane correctly evaluates the text body against the inputted `focusKeyword` and provides a score (Yoast-style green/yellow/red).
- [ ] The Next.js frontend successfully queries the `seo` object.
- [ ] Inspecting the page source (`Ctrl+U`) on the compiled Next.js blog page shows the correct `<title>`, `<meta name="description">`, and `<meta property="og:image">` tags dynamically generated from Sanity.
```