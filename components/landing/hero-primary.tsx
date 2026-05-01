"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { CarouselIcon } from "@/components/landing/carousel-icon";

export function HeroPrimary() {
  const redirectToSignIn = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const url = process.env.NODE_ENV === "development"
      ? "http://localhost:3000/sign-in"
      : "https://app.useaudora.com/sign-in";
    window.location.href = url;
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-0 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-4xl text-center z-10 w-full">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 mb-6 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-sans font-bold tracking-widest uppercase"
        >
          ✨ Now in Beta!
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold text-on-surface tracking-tighter mb-8 leading-[1.1]"
        >
          Create 3D Icons <br /><span className="text-primary">in Seconds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto mb-12"
        >
          Audora helps designers and developers generate beautiful 3D icons instantly just by typing. Get perfect assets for your next project without the friction.
        </motion.p>

        {/* Prompt Input Bar */}
        <motion.form
          onSubmit={redirectToSignIn}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-xl mx-auto flex items-center w-full mb-4"
        >
          <div className="relative w-full flex items-center p-1.5 bg-surface dark:bg-[#0a0a0a] rounded-full border border-outline-variant shadow-lg shadow-primary/5 transition-all hover:shadow-xl hover:shadow-primary/10 focus-within:shadow-xl focus-within:shadow-primary/10 focus-within:border-primary/40 group">
            <Sparkles className="absolute left-5 w-5 h-5 text-primary transition-transform group-focus-within:scale-110" />
            <input
              type="text"
              placeholder="Describe your 3D icon..."
              className="w-full bg-transparent pl-12 pr-[140px] py-3.5 outline-none text-on-surface placeholder:text-outline text-base"
              required
            />
            <button
              type="submit"
              className="absolute right-1.5 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 shadow-md shadow-primary/25 hover:shadow-primary/40 active:scale-95"
            >
              Generate
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-sm font-sans text-outline/80 mb-8"
        >
          Join other creators generating assets in seconds.
        </motion.p>

        {/* 3D Icons Carousel Preview */}
      </div>

      <div className="w-full relative z-10 mt-4 md:mt-8">
        <CarouselIcon />
      </div>
    </section>
  );
}
