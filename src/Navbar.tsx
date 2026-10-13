import { useEffect, useLayoutEffect, useRef, useState } from "react";

const sections = ["home", "about", "skills", "projects", "experience", "certifications", "contact"];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = Math.min(window.innerHeight * 0.3, 220);
      let current = sections[0];
      for (const id of sections) {
        if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= threshold) {
          current = id;
        }
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1];
      }
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const link = nav.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
      if (link) setIndicator({ left: link.offsetLeft, width: link.offsetWidth });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [activeSection, isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="section-container">
        <div className="logo">
          <span>Martha Tazvivinga</span>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav ref={navRef} aria-label="Main navigation" id="primary-navigation" className={`nav-links${isMenuOpen ? " is-open" : ""}`}>
          {sections.map((id) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}
              className={activeSection === id ? "active" : undefined}
              aria-current={activeSection === id ? "location" : undefined}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <span className="nav-indicator" aria-hidden="true" style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }} />
        </nav>

        <a href="#contact" className="nav-button" onClick={closeMenu}>
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;
