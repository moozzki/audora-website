import { client } from "@/sanity/lib/client";
import { LandingLayout } from "@/components/landing/landing-layout";
import { BlogHero } from "@/components/landing/blog-hero";
import { BlogList } from "@/components/landing/blog-list";
import type { Metadata } from "next";
import type { Post } from "@/lib/sanity.types";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest news, guides, and updates from the Audora team.",
  openGraph: {
    // WAJIB ditulis manual karena OG nggak minjem template dari layout utama
    title: "Blog | Audora - AI 3D Isometric Icon Generator",
    description: "Read the latest news, guides, and updates from the Audora team.",
    url: "https://useaudora.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Audora - AI 3D Isometric Icon Generator",
    description: "Read the latest news, guides, and updates from the Audora team.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BlogPage() {
  let posts: Post[] = [];
  let error = null;

  try {
    posts = await client.fetch(`*[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)] | order(publishedAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      "authorName": author->name,
      body
    }`) || [];
  } catch (e) {
    console.error("Sanity fetch error:", e);
    error = e;
  }

  return (
    <LandingLayout>
      <main className="flex-1 overflow-x-hidden pt-40 pb-20">
        <BlogHero />
        {error ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
            <p className="text-on-surface-variant">Give it a second and try refreshing the page.</p>
          </div>
        ) : (
          <BlogList posts={posts} />
        )}
      </main>
    </LandingLayout>
  );
}
