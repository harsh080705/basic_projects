import { useEffect, useState } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  const skewY = useTransform(velocity, [-3000, 0, 3000], [-12, 0, 12]);
  const scaleY = useTransform(velocity, [-3000, 0, 3000], [1.5, 1, 0.6]);
  const scaleX = useTransform(velocity, [-3000, 0, 3000], [0.6, 1, 0.4]);

  const skewSpring = useSpring(skewY, { stiffness: 300, damping: 30 });
  const scaleYSpring = useSpring(scaleY, { stiffness: 300, damping: 30 });
  const scaleXSpring = useSpring(scaleX, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const onLeave = () => setHidden(true);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: pos.x, y: pos.y }}
    >
      <motion.span
        style={{
          skewY: skewSpring,
          scaleX: scaleXSpring,
          scaleY: scaleYSpring,
        }}
        className="block -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_18px_rgba(16,185,129,0.7)] border border-emerald-300/60"
      />
      <motion.span
        style={{
          skewY: skewSpring,
          scaleX: scaleXSpring,
          scaleY: scaleYSpring,
        }}
        className="block -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-emerald-500/30 absolute inset-0"
      />
    </motion.div>
  );
}
