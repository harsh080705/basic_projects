export default function Navbar() {
  return (
    <header className="animate-navbar fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#070709]/40 border-b border-white/5 pointer-events-auto">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="font-mono text-xs tracking-[0.2em] text-white font-semibold uppercase">
          HARSH // STUDIO
        </span>
      </div>

      <div className="hidden md:flex flex-col items-center gap-1.5">
        <span className="font-mono text-[10px] tracking-widest text-emerald-400 uppercase">
          // SYSTEMS · DEVELOPER · ACTIVE
        </span>
        <div className="flex items-center gap-2">
          <a
            href="#projects"
            className="px-4 py-1.5 rounded-full bg-white text-black font-medium text-xs hover:bg-zinc-200 transition-colors duration-200 shadow-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full border border-white/20 bg-zinc-900/60 text-white font-medium text-xs hover:bg-white/10 transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>

      <nav className="flex items-center gap-6 font-mono text-xs tracking-wider text-zinc-400">
        <a href="#about" className="hover:text-emerald-400 transition-colors">About. →</a>
        <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects. →</a>
        <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact. →</a>
      </nav>
    </header>
  );
}
