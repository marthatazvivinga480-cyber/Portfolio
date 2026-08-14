function Projects() {
  const projects = [
    {
      title: "ForgePilot",
      description:
        "Construction project management platform that helps clients and contractors manage budgets, schedules, and tasks.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Todo Application",
      description:
        "A simple and efficient task manager app with add, edit, delete, and local storage functionality.",
      tags: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Weather Application",
      description:
        "A weather app that fetches real-time data from an API and displays forecasts for any city.",
      tags: ["React", "API", "CSS"],
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header projects-header">
          <span className="section-eyebrow">TECHNICAL PROJECTS</span>
          <h2>Recent Work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image" aria-hidden="true" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#">
                    <span className="project-link-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 6h10v10M19 6 5 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    GitHub
                  </a>
                  <a href="#">
                    <span className="project-link-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 6h10v10M19 6 5 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
