import "../styles/Projects.css";
import "../styles/common.css";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="my_work" className="section">
      <div className="section__header">
        <div className="section__tag">My Work</div>
        <h2 className="section__title">Featured <span>Projects</span></h2>
      </div>

    <div className="projects__grid">
  {PROJECTS.map((p, i) => (
    <div
      key={i}
      className="project-card"
      style={{ borderTop: `2px solid ${p.color}` }}
    >
      <div
        className="project-card__glow"
        style={{
          background: `radial-gradient(ellipse at top, ${p.color}20, transparent)`
        }}
      />
      
      <div className="project-card__tag" style={{ color: p.color }}>
        {p.tag}
      </div>

      <h3 className="project-card__title">{p.title}</h3>
      <p className="project-card__desc">{p.desc}</p>

      <div className="project-card__pills">
        {p.tech.map((t) => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>

      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          View Project →
        </a>
      )}
    </div>
  ))}
</div>
    </section>
  );
}
