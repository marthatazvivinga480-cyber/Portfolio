function Navbar() {
  return (
    <header className="navbar">
      <div className="section-container">
        <div className="logo">
          <span>My Portfolio</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;