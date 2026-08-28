import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const carouselImages = [
  { id: 1, src: "/IMG_4636.JPG", alt: "Harsh — Valley view", tag: "01 · SYSTEMS & ENVIRONMENT", title: "SYSTEMS & ENVIRONMENT", caption: "Building performant web architectures." },
  { id: 2, src: "/IMG-20250801-WA0010.jpg", alt: "Harsh — Lake portrait", tag: "02 · REACT & ARCHITECTURE", title: "PORTRAIT IN MOTION", caption: "Intuitive design meets full-stack logic." },
  { id: 3, src: "/IMG_5989.JPG", alt: "Harsh — Riverside portrait", tag: "03 · FULL-STACK DISCIPLINE", title: "FULL-STACK DISCIPLINE", caption: "Cold UI precision with warm human clarity." },
];

const reveal = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isScrollingRef.current) return;
      isScrollingRef.current = true;

      if (e.deltaY > 0) {
        setCurrentIndex((p) => (p + 1) % carouselImages.length);
      } else if (e.deltaY < 0) {
        setCurrentIndex((p) => (p - 1 + carouselImages.length) % carouselImages.length);
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 220);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const slide = carouselImages[currentIndex];

  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      animate="show"
      className="relative min-h-screen flex flex-col items-center justify-between pt-28 pb-10 px-6 overflow-hidden"
    >
      <motion.div
        variants={reveal}
        className="flex flex-col items-center text-center max-w-5xl z-10 w-full space-y-6"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-[11px] font-mono tracking-widest text-emerald-400 uppercase backdrop-blur-md">
          // SYSTEMS • DEVELOPER • ACTIVE
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight max-w-4xl">
          Experiences For The Web
        </h1>

        <div className="inline-block px-6 py-2.5 rounded-full border border-gray-800 bg-black/60 backdrop-blur-md">
          <p className="text-xs sm:text-sm font-mono tracking-wider text-gray-300 uppercase">
            A React developer focused on clean UI, smooth interactions, and responsive design.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={carouselRef}
        variants={reveal}
        onMouseEnter={() => {
          document.body.style.overflow = "hidden";
        }}
        onMouseLeave={() => {
          document.body.style.overflow = "";
        }}
        className="max-w-md w-full h-[260px] md:h-[300px] rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm"
      >
        <img
          key={slide.id}
          src={slide.src}
          alt={slide.alt}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none rounded-3xl" />

        <div className="absolute top-4 left-4 right-4 flex justify-between text-[11px] font-mono tracking-[0.25em] text-zinc-300 uppercase">
          <span>{slide.tag}</span>
          <span>IMG // {String(currentIndex + 1).padStart(2, "0")}</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <p className="text-xs text-zinc-200 font-medium max-w-[260px] drop-shadow-md">
            {slide.caption}
          </p>
          <span className="font-mono text-[11px] tracking-[0.25em] text-zinc-400 uppercase">
            {currentIndex + 1} / {carouselImages.length}
          </span>
        </div>
      </motion.div>

      <button
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
        className="group flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-950/80 border border-emerald-500/40 backdrop-blur-md text-emerald-400 font-mono text-xs tracking-widest uppercase hover:bg-emerald-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
      >
        <span>SCROLL</span>
        <span className="animate-bounce text-sm">↓</span>
      </button>
    </motion.section>
  );
}
