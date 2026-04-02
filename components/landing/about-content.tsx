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
          className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[0.95] mb-12"
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
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-[960px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">Meet the Founders</h2>
            <p className="text-on-surface-variant font-body text-lg max-w-xl mx-auto">The builders behind your new favorite digital toolset.</p>
          </motion.div>

          <div className="flex flex-col gap-10 md:gap-14">
            {/* Founder 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface-container-highest rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden flex flex-col md:flex-row w-full md:w-[92%] mr-auto"
            >
              <div className="w-full md:w-[45%] shrink-0 border-b md:border-b-0 md:border-r border-slate-200/50 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-800/50">
                <img
                  alt="Ridwan Fauzi"
                  className="w-full h-[320px] md:h-full object-cover object-top"
                  src="./assets/ridwan-founder-audora.png"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">Founder</p>
                <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-4">Ridwan Fauzi</h3>
                <p className="text-on-surface-variant text-base leading-relaxed font-body">
                  As a graphics designer, finding good 3D assets was always a massive bottleneck for my projects. I started Audora to fix this exact problem and make stunning 3D elements instantly accessible for every creator.
                </p>
              </div>
            </motion.div>

            {/* Founder 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-highest rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden flex flex-col md:flex-row w-full md:w-[92%] ml-auto"
            >
              <div className="w-full md:w-[45%] shrink-0 border-b md:border-b-0 md:border-r border-slate-200/50 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-800/50">
                <img
                  alt="Mochamad Rizky"
                  className="w-full h-[320px] md:h-full object-cover object-top"
                  src="./assets/rizky-cofounder-audora.png"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-primary font-bold tracking-widest uppercase text-xs mb-3">Co-Founder & Developer</p>
                <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-4">Mochamad Rizky</h3>
                <p className="text-on-surface-variant text-base leading-relaxed font-body">
                  Coming from a Web Designer background, I dove deep into Next.js and AI to build real solutions from scratch. Audora is my way of turning complex AI tech into a fast and simple tool for creators.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
