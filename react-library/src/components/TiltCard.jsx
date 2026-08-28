import { useRef } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

export default function TiltCard({ children, className = "", max = 5 }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skew = useTransform(velocity, [-2000, 0, 2000], [-max, 0, max]);
  const skewSpring = useSpring(skew, { stiffness: 300, damping: 30 });

  return (
    <motion.div ref={ref} style={{ skewY: skewSpring }} className={className}>
      {children}
    </motion.div>
  );
}

export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const tiltItem = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};
