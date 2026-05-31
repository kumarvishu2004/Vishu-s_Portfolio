import { useState } from "react";
import "../styles/Contact.css";
import "../styles/common.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/mzdwvpra", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section__header">
        <div className="section__tag">Get In Touch</div>
        <h2 className="section__title">Let's <span>Work Together</span></h2>
        <p className="section__sub">
          Have a project in mind or want to hire me? Drop a message and I'll get back to you ASAP.
        </p>
      </div>

      <div className="contact__grid">
        {/* Info panel */}
        <div className="contact__info">
          {[
            { icon: "📍", label: "Location", val: "India" },
            { icon: "💼", label: "Role", val: "MERN Stack Developer" },
            { icon: "⚡", label: "Status", val: "Open to Opportunities" },
            { icon: "📬", label: "Response", val: "Usually within 24 hours" },
          ].map((item) => (
            <div key={item.label} className="contact__info-item">
              <div className="contact__info-icon">{item.icon}</div>
              <div>
                <div className="contact__info-label">{item.label}</div>
                <div className="contact__info-value">{item.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form — no company name field */}
        <div className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              className="input-field"
              placeholder="Your Name"
              value={form.name}
              onChange={update("name")}
              required
            />
            <input
              className="input-field"
              placeholder="Your Email"
              type="email"
              value={form.email}
              onChange={update("email")}
              required
            />
            <input
              className="input-field"
              placeholder="Subject"
              value={form.subject}
              onChange={update("subject")}
              required
            />
            <textarea
              className="input-field input-field--textarea"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={update("message")}
              required
            />
            <button type="submit" className="submit-btn" disabled={status === "sending"}>
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "✓ Message Sent!"
                : "Send Message →"}
            </button>
            {status === "error" && (
              <p className="form-error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
