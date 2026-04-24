import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const components: PortableTextComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-10 overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-800/80">
          <Image
            src={urlFor(value).width(1200).height(800).url()}
            alt={value.alt || "Blog image"}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
          {value.alt && (
            <figcaption className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400 italic">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-6 text-3xl font-bold font-heading text-slate-900 dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-2xl font-bold font-heading text-slate-900 dark:text-white">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 pl-6 border-l-4 border-primary italic text-xl text-slate-700 dark:text-slate-200">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-8 ml-6 list-disc space-y-3 text-lg text-slate-600 dark:text-slate-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-8 ml-6 list-decimal space-y-3 text-lg text-slate-600 dark:text-slate-300">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-primary hover:underline underline-offset-4 decoration-primary/30"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>
    ),
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BlogContent({ value }: { value: any }) {
  if (!value) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 md:px-0">
      <PortableText value={value} components={components} />
    </div>
  );
}
