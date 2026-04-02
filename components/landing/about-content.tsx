"use client";

import { motion } from "framer-motion";
import { CarouselIcon } from "@/components/landing/carousel-icon";

export function AboutContent() {
  return (
    <div className="w-full">
      {/* Hero / Story Section */}
      <section className="flex flex-col items-center justify-center px-6 md:px-12 pb-24 max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold tracking-widest uppercase font-label"
        >
          Our Story
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.95] mb-12"
        >
          Built for <span className="text-primary">Creators</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-8 text-left md:text-center"
        >
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body">
            Audora started from our own frustration. Ridwan constantly hit a wall when building digital products. Finding high quality 3D icons was either too expensive or required learning complex software like Blender. The process was slow and killed creative momentum.
          </p>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body">
            To fix this, we teamed up. Combining Ridwan's product vision with Rizky's web development and AI skills, we built Audora. It is a simple platform where anyone can generate stunning 3D icons in seconds just by typing in their browser. No heavy rendering or 3D software needed, just instant assets.
          </p>
        </motion.div>

        {/* Visual Accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 w-full"
        >
          <CarouselIcon />
        </motion.div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">Meet the Founders</h2>
            <p className="text-on-surface-variant font-body max-w-xl mx-auto">The builders behind your new favorite digital toolset.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-highest mb-6 relative">
                <img
                  alt="Ridwan Fauzi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC343dqcCPFic3hk92pARmENds7h2B_Ys7dYTzfa4MezCaa_uC-AZkXatyTL1mWqoutxDgaIEyGL61MnevQC4rYyjexBlthprBWrb7hlTHYdb5ky5fpRtz9ePldg-sT3GLjWA_APDB81NaeSW9YGcaltD6lo54onr1VowqGlqmv2SH6gZNFbJFaZ5N4umgS5LOvEhqbvAotuHbVwX36h3YQVuY7T720g-v5kUL-ZtCj3DxrLuxC0bsez_F0CefL_etpLRvdi-aEE2f3"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">Ridwan Fauzi</h3>
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Founder</p>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">As a product designer obsessed with clean aesthetics, I spent years building digital experiences but constantly hit the same frustrating wall. Sourcing high-quality 3D assets was always a massive bottleneck that slowed my projects down. I started Audora because I wanted to fix that exact problem. My goal is to democratize pro-level design and make stunning 3D elements instantly accessible to every creator out there.</p>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-highest mb-6 relative">
                <img
                  alt="Mochamad Rizky"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATW-5HHjdd53kGkoJGRE5iqRNTnIX1nXfQeRfBbK3GD5ZlPBhVC619WddF1QGpN-y-5_3BmrX10zHOEOMZMDKtNQbv7GEKEpZ9PVAbNbtnazsYm2G9ap8geUy3o6fD0IsGy2oHjpF-_mt_-9z1B7v2iuKr3jaNcKv9IvGdkzJAjuQ2xqH-Q1hPZe3FafgNOBLJD4wMYI7XSY78vRLqnXtuI58ejIGC6REa1P7pDbTrUvsfk5nHijm3xFcbl20cA7xcSMczJQ03sC0F"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">Mochamad Rizky</h3>
              <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">co-founder & developer</p>
              <p className="text-on-surface-variant text-sm leading-relaxed font-body">My background is actually in web design and WordPress development. But as a huge tech geek, I couldn't ignore the massive possibilities that came with modern AI. I decided to level up my skills, diving deep into AI and context engineering to learn how to build functional SaaS platforms from scratch. Building Audora is my way of turning complex AI technology into a fast, simple, and reliable tool that helps creators work better.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
