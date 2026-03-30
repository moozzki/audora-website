"use client";

import { motion } from "framer-motion";
import { MousePointer2, Palette, Video, Download, Folder } from "lucide-react";

export function Features() {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-on-surface tracking-tight">The Ultimate 3D Creative Suite</h2>
          <p className="mt-4 text-on-surface-variant font-sans max-w-xl mx-auto">
            Everything you need to go from abstract idea to production-ready 3D asset in record time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-none md:grid-rows-2 gap-6 h-auto">
          {/* Advanced Text-to-3D (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-8 md:row-span-1 bento-card bg-white dark:bg-slate-900 rounded-4xl p-8 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center overflow-hidden"
          >
            <div className="md:w-1/2 relative z-10">
              <motion.div 
                 whileHover={{ rotate: 15 }}
                 className="w-12 h-12 rounded-2xl glass-icon dark:bg-white/10 flex items-center justify-center mb-6"
              >
                <MousePointer2 className="text-primary dark:text-white w-6 h-6" />
              </motion.div>
              <h3 className="font-heading text-3xl font-bold mb-4 text-on-surface">Advanced Text-to-3D</h3>
              <p className="text-on-surface-variant font-sans leading-relaxed">
                Our proprietary LLM understands spatial relationships, allowing for complex object generation from simple descriptions. Type it, see it, sculpt it.
              </p>
            </div>
            <div className="md:w-1/2 h-full min-h-[250px] relative group w-full">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP6Ll1YD5rjeXuCNa6Wzwd9P1lwkmH-40bKlca7NOH2EqOj9qiQ20tSYfu2Mx6PEZpKtpu5RLn9BSc1AbCPyHJK35leiHRClTntDhRRqjeqrfqLRrnMIKsTrapFMFW8cq-jcKXywiG7eawSOR0uXMuUMfrAAUuROOS9gAIPpm2Ub4QlfW8uyFxeUzlrurRH95dPi5RN7E7gBBNcspuOdKWXMX5-3OGCc2uFuciM0N3z9ew2ffEw0iZa8ucJReyhg5HFIJPk1ymRPfd" 
                  alt="3D output sample" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-black/20 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Style Presets (Vertical Small) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-4 md:row-span-1 border border-primary/20 bento-card bg-primary rounded-4xl p-8 text-white relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: -15, scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6"
              >
                <Palette className="text-white w-6 h-6" />
              </motion.div>
              <h3 className="font-heading text-2xl font-bold mb-4">Style Presets</h3>
              <p className="opacity-90 font-sans text-sm leading-relaxed mb-8">
                Swap materials instantly with professional-grade presets optimized for lighting.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              <motion.span whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold border border-white/30 cursor-default">Plastic</motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold border border-white/30 cursor-default">Clay</motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold border border-white/30 text-white/50 cursor-default">Glass</motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold border border-white/30 cursor-default">Metallic</motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold border border-white/30 cursor-default">Holographic</motion.span>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Camera Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-4 md:row-span-1 bento-card bg-surface-container-high dark:bg-slate-900 rounded-4xl p-8 flex flex-col justify-between border border-slate-200/50 dark:border-slate-800"
          >
            <div>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-2xl glass-icon dark:bg-white/10 flex items-center justify-center mb-6"
              >
                <Video className="text-slate-700 dark:text-slate-300 w-6 h-6" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold mb-2 text-on-surface">Cinematic Cameras</h3>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                Real-time perspective shifts and FOV controls.
              </p>
            </div>
            <div className="mt-8 relative h-24 bg-surface dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center group overflow-hidden">
              <div className="flex gap-4 items-center pl-10 pr-10">
                <motion.div animate={{ rotate: [12, -12, 12] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700"></motion.div>
                <motion.div animate={{ scale: [1.1, 1, 1.1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-10 h-10 rounded bg-slate-300 dark:bg-slate-600 transform -rotate-12"></motion.div>
                <motion.div animate={{ rotate: [45, 90, 45] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700"></motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-surface/50 dark:from-slate-950/50 via-transparent to-surface/50 dark:to-slate-950/50 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* High-Res Output */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-4 md:row-span-1 bento-card bg-white dark:bg-slate-900 rounded-4xl p-8 flex flex-col justify-between border border-slate-100 dark:border-slate-800"
          >
            <div>
              <motion.div 
                whileHover={{ y: -5 }} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }}
                className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
              >
                <Download className="text-primary dark:text-primary-container w-6 h-6" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold mb-2 text-on-surface">High-Res Exports</h3>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                Crisp 2K and 4K renders ready for any screen or engine.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} className="flex-1 text-center py-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-400 dark:text-slate-300 cursor-default">2K PNG</motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex-1 text-center py-3 bg-primary text-white rounded-xl text-xs font-bold shadow-sm cursor-default">4K TIFF</motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex-1 text-center py-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-400 dark:text-slate-300 cursor-default">GLTF</motion.div>
            </div>
          </motion.div>

          {/* Library Management */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="md:col-span-4 md:row-span-1 bento-card bg-slate-900 dark:bg-black rounded-4xl p-8 flex flex-col justify-between text-white border border-slate-800 dark:border-slate-900"
          >
            <div>
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6"
              >
                <Folder className="text-white w-6 h-6" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold mb-2">Seamless Library</h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">
                Every generation is automatically saved to your personal library, organized and ready whenever you need them.
              </p>
            </div>
            <motion.div whileHover={{ x: 10 }} className="mt-8 flex -space-x-3 overflow-hidden cursor-default">
              <img className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf5RYuv1CWOsqOyv3wodWGGlYhvHPJDvP_DzYQ50VZMP6WGJXDLODfEij0oTxDb93SyDPsCH_Hcnl4B7JbWCOeMFG_c3liUuTHdWNofCnxV6rbhSPN5bz8-W-O0Djsj9OnZaczLa6esrvF8LwT0SQhaPwaACYHJXGVWoxQOq8MHjyt3JBr2gsnpcpoJ_CXqIeD-BKH4wzAzgGsEJFAM_onBzgQlCtNFE5xtmVacGRmBOxBXcSZ9KPRw2truAHr2GprbxSwiuqEoxot" />
              <img className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASyxqRS31XcuoDBy1fjcu7syP1_AL5Lcttu0R3DaHUT61D5qs3VwCwjb0qdQONbDvdSCKd_kBg3d4lckly6kPgEmhOehKcNPpIl3JfXW2E4bkEkVu7XV-OxKlTe7gGsux7sRyNNj53ACpB-fQFdxLCXxM9OmSz1bsVpwd2mpEfORpgiyvFKcp-kCF-YrEN2Tz0cVRs4WrUV-B_6wgK6HhfZ-pjXeiVsma0mhe9HoDHlSjbo_igm9xM0HyJFwgZRqAR6pAa9pG3AvNw" />
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-800 ring-2 ring-slate-900 text-[10px] font-bold">
                +12
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
