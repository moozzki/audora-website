# Implementation Plan: Sanity SEO Schema & Analysis Tool

## Environment Config

- **Production URL:** `https://useaudora.com`
- **Development URL:** `http://localhost:3001`
- Use `process.env.NEXT_PUBLIC_SITE_URL`

---

## Step 1: Install Plugin

```bash
npm install sanity-plugin-seo-pane
```

---

## Step 2: Create SEO Object Schema

**File:** `sanity/schemaTypes/seo.ts` (new)

```typescript
import { defineField, defineType } from 'sanity'

export const seoType = defineType({
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
      name: 'synonyms',
      title: 'Keyword Synonyms',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Alternative keywords that mean the same thing (for synonyms analysis).',
      options: { layout: 'tags' }
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
      options: { hotspot: true },
    }),
  ]
})
```

---

## Step 3: Register Schema

**File:** `sanity/schemaTypes/index.ts`

Import `seoType` and add to schema types array:

```typescript
import { seoType } from './seo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, page, seoType],
}
```

---

## Step 4: Update Post Schema with Field Group

**File:** `sanity/schemaTypes/postType.ts`

Add `groups` array with SEO group, and add `seo` field assigned to `'seo'` group:

```typescript
import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO & Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      group: 'content',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'content',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'category' } })],
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      group: 'content',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: '🇺🇸 English', value: 'en' },
          { title: '🇮🇩 Indonesia', value: 'id' }
        ],
        layout: 'radio',
      },
      initialValue: 'en',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
```

---

## Step 5: Configure SEO Pane

**File:** `sanity.config.ts`

Add imports and `defaultDocumentNode` resolver for post documents:

```typescript
'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { SEOPane } from 'sanity-plugin-seo-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

const resolveProductionUrl = (doc: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://useaudora.com'
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

export default defineConfig({
  basePath: '/content',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
```

---

## Step 6: Update Blog Page

**File:** `app/blog/[slug]/page.tsx`

Update GROQ query to include full `seo` projection (including synonyms array) and update `generateMetadata` to use SEO fields.

### 6.1. Update GROQ Query

```typescript
async function getPost(slug: string) {
  return await client.fetch(
    `*[_type == "post" && !(_id in path("drafts.**")) && slug.current == $slug][0] {
      _id,
      _createdAt,
      title,
      slug,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      "authorName": author->name,
      "authorImage": author->image,
      body,
      "seo": seo {
        focusKeyword,
        metaTitle,
        metaDescription,
        "ogImageUrl": ogImage.asset->url
      }
    }`,
    { slug }
  );
}
```

### 6.2. Update generateMetadata

```typescript
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const description = post.body?.[0]?.children?.[0]?.text || "Read this story on Audora";

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || description,
    keywords: post.seo?.focusKeyword ? [post.seo.focusKeyword] : [],
    openGraph: {
      title: post.seo?.metaTitle || `${post.title} | Audora`,
      description: post.seo?.metaDescription || description,
      images: post.seo?.ogImageUrl ? [post.seo.ogImageUrl] : (post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : []),
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || description,
      images: post.seo?.ogImageUrl || (post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : []),
    },
  };
}
```

---

## Acceptance Criteria (DoD)

- [ ] Content writers can see specific SEO fields (Focus Keyword, Meta Title, Meta Description, OG Image) at the bottom of the Post editor in Sanity.
- [ ] The Sanity Studio UI displays a new tab or pane called "SEO Analysis" when editing a post.
- [ ] The SEO Analysis pane correctly evaluates the text body against the inputted `focusKeyword` and provides a score (Yoast-style green/yellow/red).
- [ ] The Next.js frontend successfully queries the `seo` object.
- [ ] Inspecting the page source (`Ctrl+U`) on the compiled Next.js blog page shows the correct `<title>`, `<meta name="description">`, and `<meta property="og:image">` tags dynamically generated from Sanity.