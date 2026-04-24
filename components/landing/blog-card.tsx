"use client";

import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import type { Post } from "@/lib/sanity.types";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  // Simple helper to get a plain text excerpt from block content if needed
  // In a real app, you might use a more robust portable text to plain text converter
  const excerpt = post.body?.[0]?.children?.[0]?.text || "Read more about this story...";

  return (
    <Link href={`/blog/${post.slug?.current || ""}`} className="group block h-full">
      <article className="flex flex-col h-full bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        {/* Post Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
          {post.mainImage?.asset && (
            <img
              src={urlFor(post.mainImage).width(800).height(500).url()}
              alt={post.mainImage.alt || post.title || "Blog post image"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        <div className="flex flex-col flex-1 p-8">
          {/* Category */}
          <div className="mb-4">
            {post.categories?.[0] && (
              <span className="text-sm font-sans font-medium text-primary">
                {post.categories[0]}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="font-heading text-2xl font-bold mb-4 text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="font-sans text-on-surface-variant text-base mb-6 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>

          {/* Metadata */}
          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50 flex items-center gap-4 text-sm font-sans text-outline/80">
            <span>{post.publishedAt ? format(new Date(post.publishedAt), "MMM d, yyyy") : (post._createdAt ? format(new Date(post._createdAt), "MMM d, yyyy") : "Draft")}</span>
            <span className="w-1 h-1 rounded-full bg-outline/30" />
            <span>5 min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
