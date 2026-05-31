import { useRef, useState, useEffect } from "react";
import "../styles/About.css";
import "../styles/common.css";
import { SKILLS } from "../data";

function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function SkillBar({ name, level, delay }) {
  const ref = useRef();
  const visible = useInView(ref);
  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="about__grid">
        <div className="about__left">
          <div className="section__tag">About Me</div>
          <h2 className="section__title" style={{ textAlign: "left", marginBottom: 20 }}>
            Crafting <span>Digital</span> Experiences
          </h2>
          <p className="about__bio">
            I'm Kumar Vishu, a MERN Stack Developer currently working at{" "}
            <strong>Novem Controls Pvt. Ltd.</strong>, where I build robust
            industrial software solutions. I specialize in building
            high-performance web applications from the ground up.
          </p>
          <p className="about__bio">
            My passion lies in clean code architecture, scalable APIs, and
            seamless user experiences. I love turning complex business
            requirements into elegant technical solutions.
          </p>
          <div className="about__pills">
            {["Problem Solver", "Team Player", "Fast Learner", "Clean Code Advocate"].map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>

        <div className="about__right">
          <div className="about__skills-header">
            <h3 className="about__skills-title">Technical Skills</h3>
            <span className="about__skills-hint">PROFICIENCY</span>
          </div>
          {SKILLS.map((s, i) => (
            <SkillBar key={s.name} {...s} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
