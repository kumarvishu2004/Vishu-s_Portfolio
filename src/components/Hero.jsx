import { useState, useEffect, useRef } from "react";
import "../styles/Hero.css";

const TITLES = [
  "MERN Stack Developer",
  "Full Stack Engineer",
  "React Specialist",
  "Node.js Developer",
];

function AnimatedCounter({ end, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = end / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [visible, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero({ onNav }) {
  const [typedText, setTypedText] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const titleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const cur = TITLES[titleIndex.current];
      if (!deleting.current) {
        setTypedText(cur.slice(0, charIndex.current + 1));
        charIndex.current++;
        if (charIndex.current === cur.length) {
          deleting.current = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        setTypedText(cur.slice(0, charIndex.current - 1));
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          titleIndex.current = (titleIndex.current + 1) % TITLES.length;
        }
      }
      setTimeout(type, deleting.current ? 60 : 110);
    };
    const t = setTimeout(type, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__grid">
        {/* Left */}
        <div className="hero__left">
          <p className="hero__greeting">Hi I am</p>
          <h1 className="hero__name">Kumar Vishu</h1>
          <h2 className="hero__title">
            {typedText}
            <span className="hero__cursor-char" style={{ opacity: cursorOn ? 1 : 0 }}>|</span>
          </h2>
          <p className="hero__bio">
            Currently building industrial software at{" "}
            <span>Novem Controls Pvt. Ltd.</span> — crafting scalable MERN stack
            applications with clean architecture and seamless UX.
          </p>

          <div className="hero__socials">
            <a href="https://github.com/kumarvishu2004" target="_blank" rel="noreferrer" className="hero__social-icon" title="GitHub">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/kumar-vishu-06521519b/" target="_blank" rel="noreferrer" className="hero__social-icon" title="LinkedIn"
              style={{ fontSize: 13, fontWeight: 700 }}>in</a>
            <a href="https://www.instagram.com/k_vishu___/" target="_blank" rel="noreferrer" className="hero__social-icon" title="Instagram">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>

          <div className="hero__buttons">
            <button className="hero__btn-primary" onClick={() => onNav("Contact")}>Hire Me</button>
          
          </div>
        </div>

        {/* Right */}
        <div className="hero__right">
          <div className="hero__img-wrap">
            <div className="hero__img-inner">
              <img
                src={process.env.PUBLIC_URL + "/me.png"}
                alt="Kumar Vishu"
                className="hero__img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:80px;border-radius:50%">👨‍💻</div>`;
                }}
              />
            </div>
          </div>

          <div className="hero__stats">
            {[
              { end: 2, suffix: "+", label: "Years Exp." },
              { end: 15, suffix: "+", label: "Projects" },
              { end: 10, suffix: "+", label: "Clients" },
            ].map((s) => (
              <div key={s.label} className="hero__stat">
                <div className="hero__stat-value">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
