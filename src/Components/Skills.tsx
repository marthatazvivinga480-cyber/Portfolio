function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M8 5 3 12l5 7m8-14 5 7-5 7m-2-16-2 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      skills: ["JavaScript", "Python", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 8h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 18v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      skills: ["React.js", "Tailwind CSS", "Responsive Design", "UI/UX Basics"],
    },
    {
      title: "Tools",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M13 3a3 3 0 0 1 3 3v2h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V6a3 3 0 0 1 3-3h2Zm-1 6.5h-2v7h2v-7Z"
            fill="currentColor"
          />
        </svg>
      ),
      skills: ["Git & GitHub", "VS Code", ],
    },
    {
      title: "Other",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
      skills: ["React.js", "JavaScript", "Python", "Debugging"],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header skills-header">
          <span className="section-eyebrow">TECHNICAL SKILLS</span>
          <h2>What I Work With</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-column" key={group.title}>
              <div className="skill-category">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
