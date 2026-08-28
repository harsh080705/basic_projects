import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { label: "Focus", value: "Full-Stack Dev" },
  { label: "Strength", value: "React.js" },
  { label: "Signal", value: "Systems & Web" },
];

export default function HeroPortrait() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      id="hero-portrait"
      className="relative w-full overflow-hidden bg-ink-900 py-24 px-6"
    >
      {/* Background image (place your file at /public/hero-bg.jpg) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-black/40"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          WebkitBackgroundSize: 'cover',
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[11vw] tracking-widest text-white/[0.04] whitespace-nowrap uppercase"
      >
        SYSTEMS ENGINEER // PNQ // IND
      </span>

      <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">// identity matrix</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-smoke-200 tracking-tight leading-tight">
            Portrait of a builder who ships{" "}
            <span className="text-accent">polished</span> experiences.
          </h2>
          <p className="max-w-2xl text-smoke-400 leading-relaxed">
            A modern systems-portrait that blends cold UI discipline with warm
            human clarity — surfaces the signals, patterns, and runtime used
            to turn ideas into performant React interfaces.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, rotate: i % 2 === 0 ? -0.6 : 0.6, scale: 1.02 }}
                className="rounded-2xl border border-white/5 bg-ink-600 p-5 transition-colors hover:border-accent/40"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-smoke-400">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-medium text-smoke-200">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ scale, filter: blur, y }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 bg-ink-700 shadow-[0_30px_120px_rgba(0,0,0,0.5)]"
        >
          <img
            src="/IMG-20250801-WA0010.jpg"
            alt="Portrait"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent pointer-events-none" />

          <span
            aria-hidden
            className="pointer-events-none absolute left-4 bottom-6 font-mono text-[10px] uppercase tracking-widest text-white/60"
          >
            PNQ · IND · 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
