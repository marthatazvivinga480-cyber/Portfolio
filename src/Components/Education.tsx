function Education() {
  const experiences = [
    {
      title: "Software Engineering",
      organization: "Uncommon.org",
      status: "In Progress",
      description:
        "Coursework in web development, programming fundamentals, databases, and project-based learning.",
    },
    {
      title: "Business Management & Entrepreneurship",
      organization: "Chinhoyi University of Technology",
      status: "Completed",
      description:
        "Background in strategy, business planning, and product development.",
    },
    {
      title: "Scratch Coding Volunteer",
      organization: "Primary Schools, Harare",
      status: "2026 - Present",
      description: (
        <ul className="experience-list">
          <li>Teach children basic programming concepts with Scratch</li>
          <li>Help students build interactive projects (games)</li>
          <li>Develop communication and leadership skills</li>
        </ul>
      ),
    },
  ];

  return (
    <section id="education" className="section education-section">
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
              <span> • {item.status}</span>
            </p>
            {typeof item.description === "string" ? (
              <p className="experience-description">{item.description}</p>
            ) : (
              item.description
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
