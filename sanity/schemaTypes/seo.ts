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
