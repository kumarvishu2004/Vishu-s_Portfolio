import "../styles/Services.css";
import "../styles/common.css";
import { SERVICES } from "../data";

export default function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="section__header">
        <div className="section__tag">What I Do</div>
        <h2 className="section__title">My <span>Services</span></h2>
        <p className="section__sub">Full-cycle development from database architecture to pixel-perfect UI.</p>
      </div>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <div key={i} className="card">
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
