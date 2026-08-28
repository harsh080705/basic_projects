import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const word = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function SplitText({ text, className = "", as: Tag = "span" }) {
  const words = text.split(" ");
  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      aria-label={text}
      className={`inline-block ${className}`}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
