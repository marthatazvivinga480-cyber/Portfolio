function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="hero-tag">Hi, I'm</p>
        <h1>Martha Tazvivinga</h1>
        <h2>Software Engineer</h2>
        <p className="hero-text">
          I build responsive, user-friendly web applications using JavaScript,
          React, Python, HTML and CSS. I enjoy solving problems through code and
          creating digital experiences that make an impact.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <img
            src="/IMG-20260218-WA0001.jpg"
            alt="Martha Tazvivinga"
            className="hero-avatar"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;