export default function Footer() {
  const marqueeText = "GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • GET IN TOUCH • ";

  return (
    <footer className="w-full bg-black border-t border-gray-800 pt-10 pb-6 overflow-hidden">
      <div className="relative w-full overflow-hidden whitespace-nowrap py-4 border-y border-emerald-500/20 bg-emerald-950/10">
        <div className="animate-marquee flex gap-4 text-4xl sm:text-6xl lg:text-7xl font-black font-mono tracking-widest text-emerald-400 uppercase select-none cursor-pointer">
          <span>{marqueeText}</span>
          <span aria-hidden="true">{marqueeText}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-gray-500">
        <p>© {new Date().getFullYear()} HARSH // STUDIO. ALL RIGHTS RESERVED.</p>
        <p className="text-gray-400 mt-2 md:mt-0">BUILT WITH REACT & TAILWIND</p>
      </div>
    </footer>
  );
}
