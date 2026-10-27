import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const filters = ["All", "React", "Next.js", "JavaScript", "Python"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const resultsRef = useRef<HTMLDivElement>(null);
  const previousFilter = useRef(activeFilter);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    const track = resultsRef.current;
    if (!track) return;
    track.scrollLeft = 0;
    const updateNavigation = () => {
      setCanGoBack(track.scrollLeft > 1);
      setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
    };
    updateNavigation();
    const observer = new ResizeObserver(updateNavigation);
    observer.observe(track);
    track.addEventListener("scroll", updateNavigation);
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateNavigation);
    };
  }, [activeFilter]);

  const browseProjects = (direction: number) => {
    const track = resultsRef.current;
    if (!track) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (track.clientWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  useEffect(() => {
    if (previousFilter.current === activeFilter) return;
    previousFilter.current = activeFilter;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const animation = resultsRef.current?.animate(
      [{ opacity: 0.35, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 220, easing: "ease-out" },
    );
    const stop = () => { if (preference.matches) animation?.cancel(); };
    preference.addEventListener("change", stop);
    return () => {
      animation?.cancel();
      preference.removeEventListener("change", stop);
    };
  }, [activeFilter]);
  const projects = [
    {
      title: "SafeJourney",
      description:
        "A personal-safety platform that helps people plan journeys and stay connected with the people they trust.",
      tags: ["Web App", "Personal Safety"],
      github: "",
      liveDemo: "https://safejourney-three.vercel.app",
      image: "/safejourney.png",
    },
    {
      title: "NovaCart",
      description:
        "NovaCart is a responsive e-commerce web app built with React and Firebase. It features product browsing, user authentication, a shopping cart, Stripe checkout, and order history, with a clean interface across desktop and mobile.",
      tags: ["React", "Firebase", "Stripe"],
      github: "",
      liveDemo: "https://novacart-website.web.app",
      image: "/Novacart.png",
    },
    {
      title: "MediLink Zimbabwe",
      description:
        "A healthcare platform connecting patients in Zimbabwe with doctors, with appointment booking and access to prescriptions and medical history.",
      tags: ["Healthcare", "Web App"],
      github: "",
      liveDemo: "https://medilink-zimbabwe.onrender.com",
      image: "/medilink.png",
    },
    {
      title: "Tiger Motors",
      description:
        "A multi-page vehicle showcase with product cards displaying prices and specifications, plus About, FAQ, and contact pages.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/marthatazvivinga480-cyber/Tiger-Motors",
      liveDemo: "https://tiger-motors.onrender.com",
      image: "/product20.png",
    },
    {
      title: "Todo Application",
      description:
        "A task manager for organising daily work, with tools to add, edit, and delete tasks.",
      tags: ["Python", "HTML", "CSS"],
      github: "",
      liveDemo: "https://django-todo-lr70.onrender.com/",
      image: "/todo-app.png",
    },
    {
      title: "OAK Foundation",
      description:
        "A collaborative project to build an event attendance platform for OAK Foundation using Next.js, TypeScript, and Supabase.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "API"],
      github: "https://github.com/marthatazvivinga480-cyber/OAK_Project-",
      liveDemo: "https://oak-convening-2026.vercel.app/",
      image: "/Oak-Foundation.png",
    },
    {
      title: "Temperature Converter",
      description:
        "A browser-based converter that takes a temperature and its unit, then displays Celsius, Fahrenheit, and Kelvin results together for easy comparison.",
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/marthatazvivinga480-cyber/OIBSIP/tree/main/WebDev-L1-TemperatureConverter",
      liveDemo: "https://temperature-convertor-4310.onrender.com",
      image: "/temperature-converter.png",
    },
    {
      title: "Landing Page",
      description:
        "An insurance landing page introducing services, company values, and team members, with a mobile menu and a quote enquiry interface. Built for the Oasis Infobyte internship.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/marthatazvivinga480-cyber/OIBSIP/tree/main/WebDev-L1-LandingPage",
      liveDemo: "https://landing-page-pop2.onrender.com",
      image: "/Landing-page.png",
    },
  ];
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.tags.includes(activeFilter),
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <div className="section-header projects-header">
          <span className="section-eyebrow">TECHNICAL PROJECTS</span>
          <h2>Recent Work</h2>
          <p className="projects-intro">Explore the apps and websites I've built, from everyday tools to platforms for real organisations.</p>
        </div>

        <div className="project-toolbar">
          <div className="project-filters" role="group" aria-label="Filter projects by technology">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                aria-controls="project-results"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="project-count" role="status">
            {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
            {activeFilter !== "All" ? ` using ${activeFilter}` : " to explore"}
          </p>
        </div>

        <div className="project-navigation" role="group" aria-label="Browse projects">
          <button type="button" onClick={() => browseProjects(-1)} disabled={!canGoBack} aria-label="Previous projects" aria-controls="project-results">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => browseProjects(1)} disabled={!canGoForward} aria-label="Next projects" aria-controls="project-results">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <div className="projects-grid projects-carousel" id="project-results" ref={resultsRef} role="region" aria-label="Project carousel" tabIndex={0}>
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  loading="lazy"
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
                  {project.github && <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                  >
                    <span className="project-link-icon">
                      <ArrowUpRight aria-hidden="true" strokeWidth={1.8} />
                    </span>

                    Source Code
                  </a>}

                  {project.liveDemo ? <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo (opens in a new tab)`}
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
