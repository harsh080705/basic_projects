import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      window.THREE = THREE;
      const netEffect = NET.default || NET;
      setVantaEffect(
        netEffect({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x10b981,
          backgroundColor: 0x070709,
          points: 12.0,
          maxDistance: 22.0,
          spacing: 16.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return ReactDOM.createPortal(
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
      }}
      aria-hidden
    />,
    document.body
  );
}
