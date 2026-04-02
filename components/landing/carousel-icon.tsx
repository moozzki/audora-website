"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ICONS = [
  "/assets/eunha 3d.png",
  "/assets/cake 3d icon.png",
  "/assets/sushi 3d icon.png",
  "/assets/ully 3d.png",
  "/assets/motor 3d icon.png",
  "/assets/plane 3d icon.png",
  "/assets/eunha 3d-2.png",
  "/assets/camera 3d icon.png",
  "/assets/iphone 3d icon.png",
  "/assets/iky 3d.png",
];

export function CarouselIcon() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-4 bg-transparent">
      {/* Marquee Wrapper */}
      <div className="flex w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Smooth slow scrolling
          }}
          className="flex w-max flex-none gap-6 sm:gap-10 pr-6 sm:pr-10"
        >
          {/* Duplicate strictly twice for infinite scrolling (x: 0% to -50%) */}
          {[...ICONS, ...ICONS].map((src, idx) => (
            <div
              key={idx}
              className="group relative flex h-40 w-40 sm:h-64 sm:w-64 shrink-0 cursor-pointer items-center justify-center transition-all duration-500 hover:-translate-y-4"
            >
              <div className="relative z-10 h-full w-full">
                <Image
                  src={src}
                  alt={`3D Icon ${idx}`}
                  fill
                  className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                  sizes="(max-width: 640px) 160px, 256px"
                  priority={idx < 8}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
