import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import VantaBackground from "./components/VantaBackground";
import SocialLinks from "./components/SocialLinks";
import CustomCursor from "./components/CustomCursor";
import HUD from "./components/HUD";
import InitialLoader from "./components/InitialLoader";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-zinc-300 antialiased selection:bg-emerald-500/30">
      <VantaBackground />
      <InitialLoader />

      <div className="relative z-10 bg-transparent">
        <CustomCursor />
        <SocialLinks />
        <Navbar />
        <main className="bg-transparent">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        <HUD />
      </div>
    </div>
  );
}
