import { CodeXml, PanelsTopLeft, Wrench, ListChecks } from "lucide-react";
import { useEffect, useRef } from "react";

function Skills() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!grid || !("IntersectionObserver" in window)) return;

    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      visible.forEach((entry, index) => {
        observer.unobserve(entry.target);
        if (preference.matches) return;
        animations.push(entry.target.animate(
          [
            { opacity: 0, transform: "translateY(16px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 400, delay: index * 70, easing: "ease-out", fill: "backwards" },
        ));
      });
    }, { threshold: 0.15 });

    grid.querySelectorAll(".skill-column").forEach((card) => observer.observe(card));
    const stopMotion = () => {
      if (preference.matches) animations.forEach((animation) => animation.cancel());
    };
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stopMotion);
    };
  }, []);

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

        <div className="skills-grid" ref={gridRef}>
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
