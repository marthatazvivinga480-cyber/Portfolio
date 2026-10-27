function Experience() {
  const experiences = [
    {
      title: "Software Engineering Student",
      organization: "Uncommon.org",
      period: "2026 - Present",
      bullets: [
        "Building projects using JavaScript, React and Python",
        "Learning Git workflows and collaborative development",
        "Applying Agile methodologies in team projects",
      ],
    },
    {
      title: "Youth Coding Instructor",
      organization: "Primary Schools, Harare",
      period: "2026 - Present",
      bullets: [
        "Teach children basic programming concepts with Scratch",
        "Help students build interactive projects (games)",
        "Develop communication and leadership skills",
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="section-container">
        <div className="section-header experience-header">
          <span className="section-eyebrow">EXPERIENCE</span>
          <h2>Experience & education</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((item) => (
            <div className="experience-card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="experience-meta">
                <span className="experience-org">{item.organization}</span>
                <span> • {item.period}</span>
              </p>
              <ul className="experience-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="portfolio-education"><h3>Education</h3><p><strong>BSc Business Management and Entrepreneurship</strong></p><p>Chinhoyi University of Technology · 2019–2023</p><p>Software Engineering · Uncommon.org · 2026–present</p></div>
      </div>
    </section>
  );
}

export default Experience;
