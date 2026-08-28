import React, { useState, useEffect } from "react";

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black text-white flex flex-col justify-between p-8 font-mono transition-transform duration-700 ease-in-out ${
        progress === 100 ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between text-xs tracking-widest uppercase text-zinc-300">
        <span>HARSH // STUDIO</span>
        <span className="text-zinc-500">[ SYSTEM LOADING ]</span>
      </div>

      <div className="my-auto">
        <div className="text-zinc-500 text-xs tracking-widest uppercase mb-2">
          // INITIALIZING INTERACTIVE SYSTEM
        </div>
        <div className="text-7xl md:text-9xl font-bold tracking-tighter text-white">
          {progress}%
        </div>
      </div>

      <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
        <div
          className="bg-emerald-500 h-full transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
