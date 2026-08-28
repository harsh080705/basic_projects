import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const toRange = (v, max) => ((v / max) * 2 - 1).toFixed(3);

const Corner = ({ pos, children, className = "" }) => {
  const map = {
    tl: "top-24 left-4",
    tr: "top-24 right-4",
    bl: "bottom-4 left-4",
    br: "bottom-4 right-4",
    "tl-top": "top-4 left-4",
    "tr-top": "top-4 right-4",
    "bl-above": "bottom-14 left-4",
  };
  return (
    <div
      className={`absolute ${map[pos]} flex items-center gap-3 max-w-[40vw] whitespace-nowrap overflow-hidden text-ellipsis font-mono text-[10px] tracking-widest text-zinc-500/50 uppercase ${className}`}
    >
      {children}
    </div>
  );
};

const ScrollDial = () => {
  const { scrollYProgress } = useScroll();
  const R = 16;
  const C = 2 * Math.PI * R;
  const dashOffset = useTransform(scrollYProgress, [0, 1], [C, 0]);
  const stroke = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(113,113,122,0.3)", "#10b981"]
  );

  return (
    <div className="relative w-10 h-10 shrink-0">
      <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
        <circle cx="20" cy="20" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <motion.circle
          cx="20"
          cy="20"
          r={R}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ stroke, strokeDasharray: C, strokeDashoffset: dashOffset }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[8px] text-zinc-400">◐</span>
    </div>
  );
};

export default function HUD() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    const tick = setInterval(() => setNow(new Date()), 1000);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      clearInterval(tick);
    };
  }, []);

  const cx = coords.x.toFixed(3);
  const cy = coords.y.toFixed(3);
  const t = now.toISOString().split("T")[1].slice(0, 8);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 p-4 md:p-6 flex flex-col justify-between font-mono text-[11px] tracking-widest text-zinc-500 uppercase">
      <div className="flex justify-between w-full">
        <Corner pos="tr-top">T // {t}</Corner>
      </div>

      <div className="flex justify-between w-full items-end">
        <div className="animate-hud-bottom absolute bottom-4 left-6 z-30 flex items-center gap-2 px-3 py-1 rounded-md bg-black/70 border border-emerald-500/30 backdrop-blur-md">
          <span className="text-xs font-mono font-medium tracking-wider text-emerald-400">
            X [{cx}] Y [{cy}]
          </span>
        </div>

        <div className="animate-hud-bottom absolute bottom-4 right-6 z-40 flex items-center gap-2 px-3 py-1 bg-black/80 border border-gray-800 rounded-md backdrop-blur-md">
          <ScrollDial />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-widest text-gray-200 uppercase">
            MODE // FULL_STACK_PIPELINE
          </span>
        </div>
      </div>
    </div>
  );
}
