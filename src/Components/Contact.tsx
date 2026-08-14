function Contact() {
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

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <textarea placeholder="Your Message" rows={6} />
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
