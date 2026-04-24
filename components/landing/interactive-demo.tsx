"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

export function InteractiveDemo() {
  const slides = [
    {
      prompt: "a laptop with a rocket flying out of the screen",
      image: "https://cdn.useaudora.com/assets/laptop-rocket-icon.png"
    },
    {
      prompt: "a slice of pizza wearing sunglasses",
      image: "https://cdn.useaudora.com/assets/pizza-glasses-icon.png"
    },
    {
      prompt: "a cute robot holding a cup of coffee",
      image: "https://cdn.useaudora.com/assets/robot-coffee-icon.png"
    },
    {
      prompt: "an open treasure chest filled with glowing gold coins",
      image: "https://cdn.useaudora.com/assets/treasure-icon.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden dark:bg-[#121212]">
      <div className="max-w-[960px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">
            Need a 3D icon? Just type it.
          </h2>
          <p className="text-on-surface-variant font-sans text-lg max-w-xl mx-auto">
            See how easy it is to bring your ideas to life as perfect 3D icons with Audora.
          </p>
        </motion.div>

        {/* Slide Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <DemoSlide key={activeIndex} slide={slides[activeIndex]} onComplete={nextSlide} />
          </AnimatePresence>
        </div>

        {/* Modern Dot Navigation */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="relative py-2"
              aria-label={`Go to slide ${i + 1}`}
            >
              <motion.div
                animate={{
                  width: i === activeIndex ? 32 : 8,
                }}
                className={`h-2 rounded-full transition-colors ${i === activeIndex
                  ? "bg-primary"
                  : "bg-slate-200 dark:bg-[#2f3131] hover:bg-slate-300 dark:hover:bg-[#454556]"
                  }`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

function DemoSlide({ slide, onComplete }: { slide: { prompt: string; image: string }, onComplete: () => void }) {
  const [typingIndex, setTypingIndex] = useState(0);
  const [status, setStatus] = useState<'typing' | 'loading' | 'done'>('typing');

  // Create a ref for the latest onComplete to maintain a stable dependency array
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // 1. Typing effect
    if (status === 'typing') {
      if (typingIndex < slide.prompt.length) {
        const timer = setTimeout(() => {
          setTypingIndex(prev => prev + 1);
        }, 50); // Speed of typing
        return () => clearTimeout(timer);
      } else {
        // Wait a little before moving to loading state
        const delayTimer = setTimeout(() => {
          setStatus('loading');
        }, 500);
        return () => clearTimeout(delayTimer);
      }
    }

    // 2. Loading state
    if (status === 'loading') {
      const timer = setTimeout(() => {
        setStatus('done');
      }, 1500); // Simulated loading time
      return () => clearTimeout(timer);
    }

    // 3. Auto-play next slide after 5 seconds delay when done
    if (status === 'done') {
      const timer = setTimeout(() => {
        onCompleteRef.current();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [typingIndex, status, slide.prompt]); // Stable size: 3

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {/* Left Column: Prompt Input Box */}
      <div className="bg-white dark:bg-[#1a1c1c] rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-[#2f3131] relative overflow-hidden shadow-blue-500/5 h-fit">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="flex items-center gap-3 sm:gap-4 bg-slate-50 dark:bg-[#222222] p-3 sm:p-4 rounded-2xl border border-slate-100 dark:border-white/5">
          <Search className="text-primary w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          <div className="font-sans text-on-surface font-medium text-sm md:text-base h-12 flex items-center whitespace-normal overflow-hidden leading-tight">
            {slide.prompt.slice(0, typingIndex)}
            {status === 'typing' && (
              <span className="inline-block w-0.5 h-4 sm:h-5 bg-primary ml-1 animate-pulse" />
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Gen Result Image */}
      <div className="relative aspect-square w-full bg-slate-50 dark:bg-[#1a1c1c]/50 rounded-[2rem] border border-slate-100 dark:border-[#2f3131] shadow-xl overflow-hidden flex items-center justify-center">

        <AnimatePresence mode="wait">
          {status === 'typing' && (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-slate-400 dark:text-slate-600 font-sans text-sm"
            >
              Ready to generate
            </motion.div>
          )}

          {status === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-10 h-10 border-[3px] border-primary/20 border-t-primary rounded-full animate-spin" />
              <p className="text-xs md:text-sm font-bold font-heading text-slate-500 dark:text-slate-400 animate-pulse text-center px-4">
                Generate your 3d icon...
              </p>
            </motion.div>
          )}

          {status === 'done' && (
            <motion.div
              key="done"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              className="w-full h-full relative"
            >
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt={slide.prompt}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
