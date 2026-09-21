import { CodeXml, PanelsTopLeft, Wrench, ListChecks } from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: <CodeXml aria-hidden="true" strokeWidth={1.8} />,
      skills: ["JavaScript", "Python", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      icon: <PanelsTopLeft aria-hidden="true" strokeWidth={1.8} />,
      skills: ["React.js", "Tailwind CSS", "Responsive Design", "UI/UX Basics"],
    },
    {
      title: "Tools",
      icon: <Wrench aria-hidden="true" strokeWidth={1.8} />,
      skills: ["Git & GitHub", "VS Code", ],
    },
    {
      title: "Other",
      icon: <ListChecks aria-hidden="true" strokeWidth={1.8} />,
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
