import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.7], ["-100%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.7], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 1]);

  return (
    <section ref={containerRef} id="about" className="relative h-[300vh] bg-transparent text-white">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <span className="text-xs font-mono text-emerald-400/60 uppercase tracking-widest mb-6">
          // ABOUT • THE DISCIPLINE
        </span>

        <div className="flex flex-wrap justify-center items-center gap-4 text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight font-mono text-center px-4">
          <motion.span style={{ x: leftX, opacity }} className="text-white whitespace-nowrap">
            CLOSING THE
          </motion.span>

          <motion.span style={{ x: rightX, opacity }} className="text-emerald-400 whitespace-nowrap">
            GAP.
          </motion.span>
        </div>

        <motion.p
          style={{
            opacity: useTransform(scrollYProgress, [0.6, 0.85], [0, 1]),
            y: useTransform(scrollYProgress, [0.6, 0.85], [20, 0]),
          }}
          className="mt-8 max-w-xl text-center text-xs sm:text-sm font-mono text-gray-400 px-6"
        >
          Bridging the space between complex system logic and high-precision user experiences.
        </motion.p>
      </div>
    </section>
  );
}
