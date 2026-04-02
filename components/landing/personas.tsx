"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Palette, Share2, Rocket, PlayCircle } from "lucide-react";

export function Personas() {
  const personas = [
    {
      title: "UI/UX Designers",
      icon: <Palette className="w-5 h-5" />,
      description: "Stop hunting for matching icon sets. Generate the exact 3D icons you need for your web mockups and app interfaces in seconds.",
      src: "./assets/ui-ux-designer-image.webp"
    },
    {
      title: "Marketing Teams",
      icon: <Share2 className="w-5 h-5" />,
      description: "Create fresh and eye catching 3D visuals for landing pages and social media campaigns without waiting days for a design team to deliver.",
      src: "./assets/marketing-team-image.webp"
    },
    {
      title: "Indie Developers",
      icon: <Rocket className="w-5 h-5" />,
      description: "Give your SaaS or mobile apps a premium look. You get top tier graphics to make your project stand out without needing to hire a dedicated 3D artist.",
      src: "./assets/indie-developer-image.webp"
    },
    {
      title: "Content Creators",
      icon: <PlayCircle className="w-5 h-5" />,
      description: "Make your video thumbnails and social posts stand out with custom 3D elements that you can generate instantly.",
      src: "./assets/content-creator-image.webp"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 5000; // 5 seconds per tab

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        setActiveIndex((current) => (current + 1) % personas.length);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [activeIndex, personas.length]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface overflow-hidden">
      <div className="max-w-[960px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">
            Built for people who make things.
          </h2>
          <p className="text-on-surface-variant font-sans text-lg max-w-xl mx-auto">
            We designed Audora to solve real problems and fit perfectly into your daily workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Interactive Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {personas.map((persona, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={persona.title}
                  onClick={() => {
                    setActiveIndex(index);
                    setProgress(0);
                  }}
                  className={`group relative cursor-pointer rounded-2xl p-5 transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? "bg-white dark:bg-slate-900 shadow-xl shadow-primary/5 border border-slate-100 dark:border-slate-800" 
                      : "hover:bg-black/5 dark:hover:bg-white/5 border border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-2 rounded-lg transition-colors duration-500 ${isActive ? "bg-primary text-white" : "bg-surface-container text-slate-400 group-hover:text-primary"}`}>
                      {persona.icon}
                    </div>
                    <div>
                      <h3 className={`font-heading text-lg lg:text-xl font-bold transition-colors duration-500 ${isActive ? "text-on-surface" : "text-slate-400 group-hover:text-on-surface"}`}>
                        {persona.title}
                      </h3>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <p className="mt-3 font-sans text-on-surface-variant leading-relaxed text-sm lg:text-sm">
                          {persona.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Progress Line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Auto-playing Image Showcase */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={personas[activeIndex].src}
                    alt={personas[activeIndex].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
