import { useEffect, useState } from "react";
import { Code2, BriefcaseBusiness, Mail } from "lucide-react";

const title = "Full-stack Developer";
function Hero() {
  const [subtitle, setSubtitle] = useState(title);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      clearTimeout(timer);
      if (preference.matches) {
        setSubtitle(title);
        return;
      }

      let characters = 0;
      setSubtitle("");
      const typeCharacter = () => {
        characters += 1;
        setSubtitle(title.slice(0, characters));
        if (characters < title.length) {
          timer = setTimeout(typeCharacter, 100);
        }
      };
      timer = setTimeout(typeCharacter, 350);
    };

    startTyping();
    preference.addEventListener("change", startTyping);
    return () => {
      clearTimeout(timer);
      preference.removeEventListener("change", startTyping);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="hero-tag">Hi, I'm</p>
        <h1>Martha Tazvivinga</h1>
        <h2 className="hero-subtitle" aria-label={title}>
          <span className="hero-subtitle-placeholder" aria-hidden="true">
            {title}
          </span>
          <span className="hero-subtitle-text" aria-hidden="true">
            {subtitle}<span className="hero-typing-cursor" />
          </span>
        </h2>

        <p className="hero-text">
          I build full-stack web applications with React, TypeScript and Next.js, connecting clear interfaces with authentication, APIs and databases.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a
            href="/Martha_Tazvivinga_CV_2026.docx.pdf"
            download="Martha_Tazvivinga_CV_2026.docx.pdf"
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/marthatazvivinga480-cyber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={17} aria-hidden="true" /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/martha-tazvivinga-b307783b0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BriefcaseBusiness size={17} aria-hidden="true" /> LinkedIn
          </a>

          <a
            href="mailto:marthatazvivinga480@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={17} aria-hidden="true" /> Email
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <img
            src="/hero-plain-background.webp"
            width={600}
            height={750}
            alt="Martha Tazvivinga"
            className="hero-avatar"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
