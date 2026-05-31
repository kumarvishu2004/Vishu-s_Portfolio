import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHero, setIsHero] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }

      // Check if inside hero
      const hero = document.getElementById("home");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setIsHero(
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom &&
          e.clientX >= rect.left &&
          e.clientX <= rect.right
        );
      }
    };

    // Smooth ring follow
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top = ringPos.current.y + "px";
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animateRing);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor${isHero ? " hero-cursor-dot" : ""}`}
        style={{
          width: isHero ? 20 : 12,
          height: isHero ? 20 : 12,
          background: isHero ? "#ee0979" : "#ff6a00",
          animation: isHero ? "cursorPulse 1.4s ease-in-out infinite" : "none",
        }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          width: isHero ? 60 : 36,
          height: isHero ? 60 : 36,
          borderColor: "#ff6a00",
          animation: isHero ? "ringExpand 1.4s ease-in-out infinite" : "none",
        }}
      />
    </>
  );
}
