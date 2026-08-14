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
      title: "BSc Business Management and Entrepreneurship",
      organization: "Chinhoyi University of Technology",
      period: "2019 - 2023",
      bullets: [
        "Studied core business, finance, and entrepreneurship principles",
        "Developed strategic planning and leadership skills",
        "Built foundation in project and stakeholder management",
      ],
    },
    {
      title: "Scratch Coding Volunteer",
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
          <h2>Experience</h2>
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
      </div>
    </section>
  );
}

export default Experience;
