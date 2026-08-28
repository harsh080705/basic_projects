import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const slides = [
  {
    id: "hero-attach",
    src: "/IMG_4658.JPG",
    title: "Hero scene",
    caption: "The new image placed directly into the hero carousel box.",
  },
  {
    id: "portrait",
    src: "/IMG_4658.JPG",
    title: "Portrait in motion",
    caption: "A clean, expressive hero image that anchors your identity.",
  },
  {
    id: "studio",
    src: heroImg,
    title: "Secondary visual",
    caption: "A second image for the carousel so you can shift the story.",
  },
];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  const handleNext = () => setActiveIndex((current) => (current + 1) % slides.length);
  const handlePrev = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length);

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111214] shadow-2xl">
        <div className="relative h-[320px] md:h-[360px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.id}
              src={slide.src}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              draggable={false}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute left-5 bottom-5 right-5 space-y-2 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-300">{slide.title}</p>
            <p className="max-w-xl text-sm text-zinc-200">{slide.caption}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base text-white transition hover:border-accent/40 hover:bg-accent/10"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-base text-white transition hover:border-accent/40 hover:bg-accent/10"
            >
              ›
            </button>
          </div>

          <div className="text-xs uppercase tracking-[0.35em] text-zinc-400">
            {activeIndex + 1} / {slides.length}
          </div>
        </div>
      </div>
    </section>
  );
}
