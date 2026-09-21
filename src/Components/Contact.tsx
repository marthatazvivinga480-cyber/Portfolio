import type { FormEvent } from "react";

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:marthatazvivinga@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header contact-header">
          <span className="section-eyebrow">LET'S CONNECT</span>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Get in Touch</h3>
            <p>marthatazvivinga@gmail.com</p>
            <p>+263 786 739 044</p>
            <p>Harare, Zimbabwe</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-help">
            <div className="form-row">
              <input type="text" name="name" aria-label="Your Name" autoComplete="name" placeholder="Your Name" required />
              <input type="email" name="email" aria-label="Your Email" autoComplete="email" placeholder="Your Email" required />
            </div>
            <textarea name="message" aria-label="Your Message" placeholder="Your Message" rows={6} required />
            <p id="contact-help">Opens your email app with a draft for you to send. You can also email marthatazvivinga@gmail.com directly.</p>
            <button type="submit" className="contact-button">
              Open Email Draft
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
