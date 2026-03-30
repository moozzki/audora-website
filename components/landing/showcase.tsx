"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, Bolt, ArrowRight } from "lucide-react";

export function InteractiveDemo() {
  const [activeStyle, setActiveStyle] = useState("Glass");

  const styles = [
    { name: "Glass", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbi3I0vtI3QjcKRAIkyMJr0n9JEwa_Ypv2x_jiczqzht-BHpi8fKRS3Db_tTE8njFxu2k5otWYqYGPN-CPVKfpkhJ5ZSX2tVYH7CXLm9rYGTUyK180mWClQVsrfiI68_MriHSusa28WZj-QPIKFOBScNj9Cx8mLfjChgECcbIaZCoRO0Xir_8YB_5Y-EYmubNo-NceECQAuVxUlXEwVvZsuO6T3pImjgfeUirmKgt3oo0RUrjSy7ZvnyodckzBvHLoZdh3QlD6sg1m" },
    { name: "Plastic", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1QNQo4HLrZD3ZHsEzXFfM9VrUr3STAXl4mA2BuNYfmb5DFhtn1SNyUPjaysNQ_vy7dqxtVw0O1zk52EBG7hdMsfp6MJNPGJGwGcf-tlOgXNfqy2dmc8EZl20jG9hTgRQ-Fmu0JxXqJXK-KjqvqhMoURGw3w0ElV1GYYkVRxXtNNXR0SNXQhrrIaZaINkdxO8q-2X7qishrxpQtSESYWu2kAaHW9aF-RXkB_ShnB04YDCw9A2L6J2PHR0OVygZkq1fS-r-ibKJnNAl" },
    { name: "Metallic", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHexTojLD2ygmEtEVG5JcK_m22KAAKirEo6oY3y8DQBZrTvtZX18-nu1CXbwcx9HOiWw0Nf_LtxUmBkHX_ez2ph2C4vz6EJ1v3QGZ42awBgqZPF3SbsIHvgoCbwfTu2fE0bmiMWWqF2yAqlcLEV4_k6UlwB-5z-oc_hYp013-wSJaj2dU6gAjNmwIiBE0rhskynJ5QjCh_P6zKeOo7fE8HffyfnwMwjeuC8viMiVl7yTBnrNhEgJOr6xZnQP84i__cRGGWTgabFreY" },
    { name: "Plush", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_qy69q7ZG1YvihmEYTU-UppzgIj8lYEZEvkYJzZK77NtmUa6THxiI9aWYCQetOKjuXgyeZ6U11a-KH9CJa55sL13ClFUUiwfAgkTOPntcuw_sjSV2fvFoVqhnMTQDpAgRslrnaHqS2BnIssd81Nbsvr3hdrksigu2bl39bshwsjL8-ik99SZwIGgi_9XhUr1KmINSemtbxtT-wYHpPih7FDtgpfFly0hKFfYHb31mSOn7Z-GDtoOfkT4-B4zWS9moWBHvl2OqqwC" },
  ];

  const activeSrc = styles.find(s => s.name === activeStyle)?.src;

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-xs md:text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Interactive Demo</h2>
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">One Prompt. Endless Styles.</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center bg-surface-container-lowest rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-blue-500/5">
          {/* Left: Prompt Simulation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h4 className="font-heading text-2xl font-bold text-on-surface">Intuitive Prompting</h4>
              <p className="text-on-surface-variant font-sans leading-relaxed">
                Our neural engine interprets your creative vision instantly. Just describe it, and Audora generates a physics-accurate 3D model.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700" />
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 bg-slate-50 dark:bg-slate-800 p-3 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                <Search className="text-primary w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <div className="font-sans text-on-surface font-medium text-sm sm:text-base typing-effect h-6 flex items-center">
                  A translucent blue jelly fox...
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["#LowPoly", "#StudioLighting", "#4K"].map(tag => (
                  <div key={tag} className="px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold border border-primary/10">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <Bolt className="w-5 h-5 fill-current" />
              </div>
              <span className="text-sm font-bold font-heading uppercase tracking-widest text-slate-400">
                Generated in 1.2s
              </span>
            </div>
          </motion.div>

          {/* Right: Style Switcher */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-[2rem] p-5 md:p-8 shadow-inner border border-slate-100 dark:border-slate-800 h-full flex flex-col justify-center"
          >
            <div className="aspect-square w-full max-w-[300px] md:max-w-[400px] mx-auto relative group flex items-center justify-center">
              {/* Main Image Display */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeStyle}
                    src={activeSrc}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-contain style-transition" 
                    alt={`${activeStyle} 3D style`} 
                  />
                </AnimatePresence>
              </div>
              
              {/* Decorative blur */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>

            {/* Style Controls */}
            <div className="mt-8 grid grid-cols-2 min-[400px]:grid-cols-4 gap-3">
              {styles.map((style) => (
                <button 
                  key={style.name}
                  onClick={() => setActiveStyle(style.name)}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className={`w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border-2 style-transition hover:scale-105 ${
                    activeStyle === style.name 
                      ? "border-primary ring-4 ring-primary/10" 
                      : "border-transparent dark:border-slate-700"
                  }`}>
                    <img className={`w-full h-full object-cover ${activeStyle === style.name ? '' : 'opacity-60'}`} src={style.src} alt={style.name} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-tighter style-transition ${
                    activeStyle === style.name ? "text-primary" : "text-slate-400 group-hover:text-primary"
                  }`}>
                    {style.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <button className="bg-primary hover:bg-primary-container text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-heading font-bold text-sm md:text-base flex items-center gap-2 md:gap-3 transition-all duration-300 shadow-xl shadow-primary/10">
            Generate for Free
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export function Personas() {
  const personas = [
    {
      title: "UI/UX Designers",
      description: "Instantly create high-fidelity assets for mockups and production apps with zero overhead.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASyxqRS31XcuoDBy1fjcu7syP1_AL5Lcttu0R3DaHUT61D5qs3VwCwjb0qdQONbDvdSCKd_kBg3d4lckly6kPgEmhOehKcNPpIl3JfXW2E4bkEkVu7XV-OxKlTe7gGsux7sRyNNj53ACpB-fQFdxLCXxM9OmSz1bsVpwd2mpEfORpgiyvFKcp-kCF-YrEN2Tz0cVRs4WrUV-B_6wgK6HhfZ-pjXeiVsma0mhe9HoDHlSjbo_igm9xM0HyJFwgZRqAR6pAa9pG3AvNw"
    },
    {
      title: "Marketing Teams",
      description: "Generate unique, scroll-stopping visuals for landing pages and social media campaigns.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf5RYuv1CWOsqOyv3wodWGGlYhvHPJDvP_DzYQ50VZMP6WGJXDLODfEij0oTxDb93SyDPsCH_Hcnl4B7JbWCOeMFG_c3liUuTHdWNofCnxV6rbhSPN5bz8-W-O0Djsj9OnZaczLa6esrvF8LwT0SQhaPwaACYHJXGVWoxQOq8MHjyt3JBr2gsnpcpoJ_CXqIeD-BKH4wzAzgGsEJFAM_onBzgQlCtNFE5xtmVacGRmBOxBXcSZ9KPRw2truAHr2GprbxSwiuqEoxot"
    },
    {
      title: "Indie Developers",
      description: "Premium branding and in-app graphics without the overhead of a custom 3D artist.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHXat3l70vXW0E8Qp_Tz7R-n9B_WvC_B7JvC4B-C7v-v8B7v_B7vC4B7v-v8B7v_B7vC4B7v-v8B7v_B7vC4B7v-v8B7v_B7vC4B7v-v8B7v_B7vC4B7v-v8B7v_B7vC4B7v-v8B7v_B7vC4B7v-v8B7v_B7vC4B7v-v8B7v_B7vC4"
    },
    {
      title: "Content Creators",
      description: "Unique thumbnails, avatars, and custom branding assets that make your content pop.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-Ut7EbDSrWdvbniUHBY7m1gJbTpSy3Dzr3Ar_ORmRMhmshFgD1bD-uPPMnrMeJZWOlQQoh95ie_tjUOM5dL7tzmwkmmcD24Jgkj0OobLnDLmz9xQ2X3Dy7bG1sQxj4-UWIQmRpCpigEsL67t2u9xLAk0mv2wO3z-g2A3EGZ9-Q0qxYkTdrZVGA0vYQQB7zl_6Seonw2g0QJQcXgDwk1oRVJxiJ0qJR3X2H1gdDm21qlSD2CvBabSvTnqgoOFoV52OyOltl72BZhIS"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            Built for the Modern Creator.
          </h2>
          <p className="mt-4 text-on-surface-variant font-sans text-sm md:text-base max-w-xl mx-auto">
            Custom-tailored workflows for the designers of tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="persona-card bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col h-full group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={persona.src} 
                  alt={persona.title}
                  onError={(e) => {
                      // Fallback if the demo image provided in HTML breaks
                      e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="font-heading text-lg md:text-xl font-bold mb-2 md:mb-3 text-on-surface">{persona.title}</h4>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
