"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  rating: number;
  content: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const json = await res.json();

        if (json.success && json.testimonials) {
          setTestimonials(json.testimonials);
        }
      } catch (err) {
        console.error("Error loading testimonials:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-surface-container-low dark:bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">
            Loved by creators and developers.
          </h2>

          <p className="text-on-surface-variant font-sans text-base sm:text-lg max-w-xl mx-auto">
            Here is what people are saying about their experience creating 3D assets with Audora.
          </p>
        </motion.div>

        {/* Masonry Layout */}
        {isLoading ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="break-inside-avoid bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm animate-pulse space-y-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <div key={sIdx} className="w-4 h-4 rounded bg-slate-200 dark:bg-slate-800" />
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/5" />
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="break-inside-avoid bento-card bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, starIdx) => {
                      const isFilled = starIdx < item.rating;
                      return (
                        <Star
                          key={starIdx}
                          className={`w-4 h-4 ${
                            isFilled
                              ? "text-amber-400 fill-amber-400"
                              : "text-slate-200 dark:text-slate-800"
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* Testimonial Content */}
                  <p className="font-sans text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed italic">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
            <p className="text-on-surface-variant text-sm font-sans">
              No feedback yet. Be the first to leave a review!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
