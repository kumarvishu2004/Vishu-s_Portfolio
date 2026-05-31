import "../styles/common.css";

export default function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="footer__logo">KV.</div>
      <p className="footer__copy">© 2026 Kumar Vishu ·</p>
      <div className="footer__links">
        {["Home", "Services", "My_Work"].map((l) => (
          <span key={l} className="footer__link" onClick={() => onNav(l)}>{l}</span>
        ))}
      </div>
      <a
        className="footer__cv-btn"
        href="/kumar_vishu_resume.pdf"
        download="Kumar_Vishu_Resume.pdf"
      >
        ⬇ Download CV
      </a>
    </footer>
  );
}
