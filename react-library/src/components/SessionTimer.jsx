import { useEffect, useState } from "react";

const fmt = (n) => String(n).padStart(2, "0");

export default function SessionTimer({ className = "" }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const tick = () => setSeconds(Math.floor((performance.now() - start) / 1000));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const h = fmt(Math.floor(seconds / 3600));
  const m = fmt(Math.floor((seconds % 3600) / 60));
  const s = fmt(seconds % 60);

  return (
    <span className={`font-mono text-[10px] tracking-widest text-emerald-400 ${className}`}>
      SESSION {h}:{m}:{s}
    </span>
  );
}
