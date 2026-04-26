import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { LandingLayout } from "@/components/landing/landing-layout";
import { BlogContent } from "@/components/landing/blog-content";
import { ShareButtons } from "@/components/landing/share-buttons";
import { ReadingProgress } from "@/components/landing/reading-progress";
import { BlogCard } from "@/components/landing/blog-card";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Post } from "@/lib/sanity.types";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

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

async function getRelatedPosts(slug: string, categories: string[]) {
  if (!categories || categories.length === 0) return [];
  return await client.fetch(
    `*[_type == "post" && !(_id in path("drafts.**")) && slug.current != $slug && count((categories[]->title)[@ in $categories]) > 0][0...3] {
      _id,
      _createdAt,
      title,
      slug,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      "authorName": author->name
    }`,
    { slug, categories }
  );
}

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

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, post.categories);
  const currentUrl = `https://useaudora.com/blog/${post.slug.current}`;

  return (
    <LandingLayout>
      <ReadingProgress />
      <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-[#0A0A0A]">
        <div className="container-max">
          {/* Top Navigation */}
          <div className="max-w-3xl mx-auto mb-12 px-4 md:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </div>

          <article>
            {/* Post Header */}
            <div className="max-w-3xl mx-auto mb-12 px-4 md:px-0">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories?.map((cat: string) => (
                  <span
                    key={cat}
                    className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white leading-tight mb-8">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-slate-100 dark:border-slate-800/50">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {post.authorName || "Audora Team"}
                    </span>
                    <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt ? format(new Date(post.publishedAt), "MMMM d, yyyy") : (post._createdAt ? format(new Date(post._createdAt), "MMMM d, yyyy") : "Recent")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        5 min read
                      </span>
                    </div>
                  </div>
                </div>

                <ShareButtons title={post.title} url={currentUrl} />
              </div>
            </div>

            {/* Hero Image - Rounded Container */}
            <div className="max-w-3xl mx-auto px-4 md:px-0 mb-16">
              <div className="rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-[21/9]">
                {post.mainImage?.asset ? (
                  <Image
                    src={urlFor(post.mainImage).width(1600).height(800).url()}
                    alt={post.mainImage.alt || post.title}
                    width={1600}
                    height={800}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                    <div className="text-primary/20 font-bold text-4xl">AUDORA</div>
                  </div>
                )}
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-20">
              <BlogContent value={post.body} />
            </div>

            <div className="max-w-3xl mx-auto py-12 border-t border-slate-100 dark:border-slate-800/50 px-4 md:px-0">
               <ShareButtons title={post.title} url={currentUrl} />
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-20 border-t border-slate-100 dark:border-slate-800">
              <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-12 text-center">
                Keep Reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((rPost: Post) => (
                  <BlogCard key={rPost._id} post={rPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </LandingLayout>
  );
}
