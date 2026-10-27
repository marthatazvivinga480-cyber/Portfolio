import type { FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    window.open(`mailto:marthatazvivinga480@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header contact-header">
          <span className="section-eyebrow">LET'S CONNECT</span>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-intro">
            <h3>Have a project in mind?</h3>
            <p>Let's talk about your next web application.</p>
            <dl className="contact-methods">
              <div><Mail aria-hidden="true" size={24} /><div><dt>Email</dt><dd><a href="mailto:marthatazvivinga480@gmail.com">marthatazvivinga480@gmail.com</a></dd></div></div>
              <div><Phone aria-hidden="true" size={24} /><div><dt>Phone</dt><dd><a href="tel:+263786739044">+263 786 739 044</a></dd></div></div>
              <div><MapPin aria-hidden="true" size={24} /><div><dt>Location</dt><dd>Harare, Zimbabwe</dd></div></div>
            </dl>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-email-help">
            <div className="form-row">
              <label htmlFor="contact-name">Name<input id="contact-name" type="text" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></label>
              <label htmlFor="contact-email">Email<input id="contact-email" type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
            </div>
            <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" placeholder="Tell me a little about your project." rows={5} required maxLength={3000} /></label>
            <button type="submit" className="contact-button">
              Open email draft
            </button>
            <p id="contact-email-help" className="contact-help">
              Opens a draft in your email app. Review it there before sending.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
