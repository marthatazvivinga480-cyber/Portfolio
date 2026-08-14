function About() {
  const infoItems = [
    {
      title: "Location",
      value: "Harare, Zimbabwe",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Zm0 3.5A3.5 3.5 0 1 0 12 12.5 3.5 3.5 0 0 0 12 5.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Education",
      value: "Software Engineering (In Progress)",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3 2 7l10 4 10-4-10-4Zm-8 7 8 3.2 8-3.2v3.3l-8 3.2-8-3.2V10Zm0 5 8 3.2 8-3.2v3.3l-8 3.2-8-3.2v-3.3Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Experience",
      value: "Student & Volunteer",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 2h10a2 2 0 0 1 2 2v3h2v2h-2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9H3V7h2V4a2 2 0 0 1 2-2Zm0 5v9h10V7H7Zm2 2h6v2H9V9Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header about-header">
          <span>About Me</span>
          <h2>Student Software Engineer</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an aspiring Software Engineer with a background in Business
              Management and Entrepreneurship. I enjoy building responsive web
              applications, learning new technologies, and turning ideas into
              real-world solutions.
            </p>
            <p>
              Currently studying Software Engineering and contributing to
              projects that improve both design and performance for modern users.
            </p>
          </div>

          <div className="about-cards">
            {infoItems.map((item) => (
              <div className="info-card" key={item.title}>
                <div className="info-icon">{item.icon}</div>
                <h3 className="info-label">{item.title}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;