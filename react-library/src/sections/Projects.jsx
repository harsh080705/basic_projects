import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.3], ["-100vw", "0vw"]);
  const rightX = useTransform(scrollYProgress, [0, 0.3], ["100vw", "0vw"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section ref={containerRef} id="projects" className="relative h-[300vh] bg-transparent text-white">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-6">
          // SELECTED WORKS • 02
        </span>

        <div className="relative flex items-center justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter font-mono text-center w-full">
          <motion.span
            style={{ x: leftX, opacity }}
            className="text-white whitespace-nowrap pr-2"
          >
            FEATURED
          </motion.span>

          <motion.span
            style={{ x: rightX, opacity }}
            className="text-emerald-400 whitespace-nowrap pl-2"
          >
            PROJECTS.
          </motion.span>
        </div>

        <motion.p
          style={{ opacity: useTransform(scrollYProgress, [0.25, 0.4], [0, 1]) }}
          className="mt-6 text-xs sm:text-sm font-mono text-gray-400 tracking-wider uppercase text-center max-w-md"
        >
          Engineered with high performance & responsive UI precision.
        </motion.p>
      </div>
    </section>
  );
}
