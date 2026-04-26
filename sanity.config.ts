'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\content\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig, type SanityDocument} from 'sanity'
import {structureTool} from 'sanity/structure'
import { SEOPane } from 'sanity-plugin-seo-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

interface SanityDocumentWithSlug extends SanityDocument {
  slug?: { current?: string };
  language?: string;
}

const resolveProductionUrl = (doc: SanityDocumentWithSlug) => {
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
          url: (doc: SanityDocumentWithSlug) => resolveProductionUrl(doc),
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
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure, defaultDocumentNode}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
