import { ArrowUpRight } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Tiger Motors",
      description:
        "A car sale website where users can browse and purchase vehicles.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "",
      liveDemo: "https://tiger-motors.onrender.com",
      image: "/product20.png",
    },
    {
      title: "Todo Application",
      description:
        "A simple and efficient task manager app with add, edit, delete, and local storage functionality.",
      tags: ["Python", "HTML", "CSS"],
      github: "",
      liveDemo: "",
      image: "/todo-app.png",
    },
    {
      title: "OAK Foundation",
      description:
        "A web application for the OAK Foundation Event Attendance Platform.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "API"],
      github: "",
      liveDemo: "https://oak-project-2.vercel.app",
      image: "/Oak-Foundation.png",
    },
    {
      title: "Temperature Converter",
      description:
        "A responsive temperature converter that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin.",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "",
      liveDemo: "https://temperature-convertor-4310.onrender.com",
      image: "/temperature-converter.png",
    },
    {
      title: "Landing Page",
      description:
        "A responsive modern landing page designed with a clean layout, engaging sections, and an intuitive user experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "",
      liveDemo: "https://landing-page-pop2.onrender.com",
      image: "/Landing-page.png",
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
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github ? <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="project-link-icon">
                      <ArrowUpRight aria-hidden="true" strokeWidth={1.8} />
                    </span>

                    GitHub
                  </a> : <span>GitHub unavailable</span>}

                  {project.liveDemo ? <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="project-link-icon">
                      <ArrowUpRight aria-hidden="true" strokeWidth={1.8} />
                    </span>

                    Live Demo
                  </a> : <span>Demo unavailable</span>}
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