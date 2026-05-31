import { useRef, useState, useEffect } from "react";
import "../styles/Experience.css";
import "../styles/common.css";
import { EXPERIENCES } from "../data";

function useInView(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function ExpItem({ item, index }) {
  const ref = useRef();
  const visible = useInView(ref);

  return (
    <div
      ref={ref}
      className="exp-item"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 150}ms, transform 0.6s ease ${index * 150}ms`,
      }}
    >
      <div className="exp-item__dot-wrap">
        <div className={`exp-item__dot${item.current ? " exp-item__dot--current" : ""}`} />
        <div className="exp-item__line" />
      </div>

      <div className="exp-item__body">
        <div className="exp-item__header">
          <h3 className="exp-item__title">{item.title}</h3>
          <span className={`exp-item__badge ${item.current ? "exp-item__badge--current" : "exp-item__badge--past"}`}>
            {item.current ? "● Current" : "Completed"}
          </span>
        </div>
        <div className="exp-item__company">{item.company}</div>
        <div className="exp-item__duration">{item.duration}</div>
        <p className="exp-item__desc">{item.desc}</p>
        <div className="exp-item__tags">
          {item.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="section__header">
        <div className="section__tag">My Journey</div>
        <h2 className="section__title">Work <span>Experience</span></h2>
        <p className="section__sub">My professional path — building real-world products that matter.</p>
      </div>

      <div className="experience__timeline">
        {EXPERIENCES.map((item, i) => (
          <ExpItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
