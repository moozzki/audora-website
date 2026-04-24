import { client } from "@/sanity/lib/client";
import { LandingLayout } from "@/components/landing/landing-layout";
import { BlogContent } from "@/components/landing/blog-content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { StaticPage } from "@/lib/sanity.types";

export const dynamic = "force-dynamic";

async function getPage() {
  return await client.fetch<StaticPage>(
    `*[_type == "page" && slug.current == "terms-of-service"][0] {
      _id,
      _createdAt,
      _updatedAt,
      title,
      slug,
      content
    }`
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage();
  if (!page) return { title: "Not Found" };

  return {
    title: page.title,
    description: `Read the ${page.title} for Audora.`,
  };
}

export default async function TermsOfServicePage() {
  const page = await getPage();

  if (!page) {
    notFound();
  }

  const lastUpdated = page._updatedAt || page._createdAt;

  return (
    <LandingLayout>
      <main className="min-h-screen pt-40 pb-24 bg-[#f9f9f9] dark:bg-[#0d0d0d] relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <header className="mb-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 dark:text-white mb-6 tracking-tight">
              {page.title}
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(73,73,255,0.4)]" />
            <p className="text-slate-500 dark:text-slate-400 font-sans text-lg">
              Last updated: {lastUpdated ? new Date(lastUpdated).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently'}
            </p>
          </header>

          <div className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] p-8 md:p-16 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm shadow-xl shadow-slate-200/20 dark:shadow-none animate-in fade-in duration-1000 delay-200">
            <BlogContent value={page.content} />
          </div>

          <footer className="mt-16 text-center text-slate-400 dark:text-slate-500 text-sm italic font-sans animate-in fade-in duration-1000 delay-500">
            Questions regarding our terms? Reach out to <a href="mailto:support@useaudora.com" className="text-primary hover:underline underline-offset-4">support@useaudora.com</a>
          </footer>
        </div>
      </main>
    </LandingLayout>
  );
}
