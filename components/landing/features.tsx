"use client";

import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="py-32 px-8 bg-surface-container-low dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface tracking-tight">Perfect icons, made simple.</h2>
          <p className="mt-4 text-on-surface-variant font-sans max-w-xl mx-auto">
            We built a simple workflow so you can focus on your project, not on rendering settings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          {/* Row 1, Col 1: Text to 3D Generation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-6 bento-card bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-[2rem] p-8 md:p-10 flex flex-col shadow-sm"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-slate-900 dark:text-white">Text to 3D Generation</h3>
              <p className="text-slate-600 dark:text-slate-400 font-sans text-sm md:text-base leading-relaxed">
                Describe what you need, and Audora turns your words into detailed 3D icons instantly. You type it, we build it.
              </p>
            </div>
            <div className="w-full flex-grow flex items-center justify-center mt-10">
              <img
                src="/assets/text-to-3d-generation.webp"
                alt="Text to 3D Generation"
                className="w-full h-64 md:h-64 object-contain"
              />
            </div>
          </motion.div>

          {/* Row 1, Col 2: One Click Styles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-6 bento-card bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-[2rem] p-8 md:p-10 flex flex-col shadow-sm"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-slate-900 dark:text-white">One Click Styles</h3>
              <p className="text-slate-600 dark:text-slate-400 font-sans text-sm md:text-base leading-relaxed">
                Choose from styles like plastic, clay, or glass. We handle all the complex lighting and textures for you.
              </p>
            </div>
            <div className="w-full flex-grow flex items-center justify-center mt-10">
              <img
                src="/assets/one-click-style.webp"
                alt="One Click Styles"
                className="w-full h-64 md:h-64 object-contain"
              />
            </div>
          </motion.div>

          {/* Row 2, Col 1: Easy Camera Angles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-4 bento-card bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-[2rem] p-8 flex flex-col shadow-sm"
          >
            <div>
              <h3 className="font-heading text-xl font-bold mb-3 text-slate-900 dark:text-white">Easy Camera Angles</h3>
              <p className="text-slate-600 dark:text-slate-400 font-sans text-sm leading-relaxed">
                Pick the perfect perspective from our preset list. No manual rotation or guessing the best view required.
              </p>
            </div>
            <div className="w-full flex-grow flex items-center justify-center mt-8 md:mt-10">
              <img
                src="/assets/easy-camera-angles.webp"
                alt="Easy Camera Angles"
                className="w-full h-56 md:h-48 object-contain"
              />
            </div>
          </motion.div>

          {/* Row 2, Col 2: High Resolution Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-4 bento-card bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-[2rem] p-8 flex flex-col shadow-sm"
          >
            <div>
              <h3 className="font-heading text-xl font-bold mb-3 text-slate-900 dark:text-white">High Resolution Downloads</h3>
              <p className="text-slate-600 dark:text-slate-400 font-sans text-sm leading-relaxed">
                Export in crisp 2K or 4K quality, ready to drop straight into your Figma files or web projects.
              </p>
            </div>
            <div className="w-full flex-grow flex items-center justify-center mt-8 md:mt-10">
              <img
                src="/assets/high-quality-download.webp"
                alt="High Resolution Downloads"
                className="w-full h-56 md:h-48 object-contain"
              />
            </div>
          </motion.div>

          {/* Row 2, Col 3: Your Personal Library */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-4 bento-card bg-white dark:bg-[#141414] border border-slate-200/60 dark:border-slate-800/80 rounded-[2rem] p-8 flex flex-col shadow-sm"
          >
            <div>
              <h3 className="font-heading text-xl font-bold mb-3 text-slate-900 dark:text-white">Your Personal Library</h3>
              <p className="text-slate-600 dark:text-slate-400 font-sans text-sm leading-relaxed">
                Every icon you generate is automatically saved and organized in your account, ready whenever you need it.
              </p>
            </div>
            <div className="w-full flex-grow flex items-center justify-center mt-8 md:mt-10">
              <img
                src="/assets/personal-library.webp"
                alt="Your Personal Library"
                className="w-full h-56 md:h-48 object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
