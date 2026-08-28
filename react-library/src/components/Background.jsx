export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0b]">
      <img
        src="/IMG-20250801-WA0010.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b]/60 to-[#0a0a0b]/90" />
    </div>
  );
}
