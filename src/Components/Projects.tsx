import { ArrowUpRight, MessageCircle, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const filters = ["All", "React", "Next.js", "JavaScript", "Python"];
const projects = [
    {
      title: "SafeJourney",
      description:
        "A personal safety web app for planning journeys, sharing live location with selected trusted contacts, and recording safety check-ins. Built with Next.js, TypeScript and Firebase.",
      tags: ["Next.js", "TypeScript", "Firebase", "MapLibre"],
      github: "https://github.com/marthatazvivinga480-cyber/safejourney",
      liveDemo: "https://safejourney-three.vercel.app",
      image: "/safejourney.png",
    },
    {
      title: "NetPulse AI",
      description:
        "A customer network experience intelligence platform for Zimbabwe. Customers can report connectivity problems and run browser connection tests, while administrators investigate correlated incidents with AI-assisted explanations. Built with Next.js, TypeScript and Firebase.",
      tags: ["Next.js", "TypeScript", "Firebase", "MapLibre", "Gemini API"],
      github: "https://github.com/marthatazvivinga480-cyber/NetPulse",
      liveDemo: "https://net-pulse-xi.vercel.app/",
      image: "/netpulse.png",
    },
    {
      title: "Sideby Chat",
      description: "An original direct messaging app with verified sign-in, live conversations and persistent message editing and deletion. Built with Next.js, TypeScript and Firebase.",
      tags: ["Next.js", "TypeScript", "Firebase"],
      github: "https://github.com/marthatazvivinga480-cyber/Sideby_Chat_App",
      liveDemo: "https://sideby-chat-app.onrender.com",
      image: "",
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
      image: "/medilink.webp",
    },
    {
      title: "Tiger Motors",
      description:
        "A multi-page vehicle showcase with product cards displaying prices and specifications, plus About, FAQ, and contact pages.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/marthatazvivinga480-cyber/Tiger-Motors",
      liveDemo: "https://tiger-motors.onrender.com",
      image: "/product20.webp",
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
      image: "/temperature-converter.webp",
    },
    {
      title: "Landing Page",
      description:
        "An insurance landing page introducing services, company values, and team members, with a mobile menu and a quote enquiry interface. Built for the Oasis Infobyte internship.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/marthatazvivinga480-cyber/OIBSIP/tree/main/WebDev-L1-LandingPage",
      liveDemo: "https://landing-page-pop2.onrender.com",
      image: "/Landing-page.webp",
    },
  ];

const notes: Record<string, { contribution: string; decision: string; evidence: string }> = {
 "SafeJourney": { contribution: "Built the responsive interface and Firebase integration for verified sign-in, saved journeys, trusted contacts, route planning, private location sharing and check-ins.", decision: "Used Firestore realtime listeners for location and check-in updates, with Security Rules restricting access to selected verified contacts. Short expiry times limit access when location updates stop.", evidence: "Tested sharing between a phone and laptop, confirmed that stopping sharing revoked access, and verified that both check-in options remained saved after refresh. Automated tests covered validation, account privacy and sharing expiry." },
 "NetPulse AI": { contribution: "Built the reporting interface, browser diagnostics, incident correlation, interactive maps and administrator workspace with Gemini-powered explanations.", decision: "Used Firestore listeners for live updates and authenticated Next.js server routes for validation, administrator permissions and private AI requests. Kept simulated data separate from customer reports.", evidence: "Tested reporting, authentication, database permissions and incident updates with Firebase emulators. Verified connection tests on the deployed application and validated AI responses, including missing-metric and failure handling." },
 "Sideby Chat": { contribution: "Built the interface and Firebase integration for account setup, user search and direct messaging.", decision: "Used Firestore listeners for live updates and server-side checks for conversation membership and message ownership.", evidence: "Tested two verified accounts in separate windows: messages, edits and deletions persisted after refresh." },
 "OAK Foundation": { contribution: "Contributed to a collaborative event attendance platform. See the repository for the implementation.", decision: "The project uses Next.js, TypeScript and Supabase to connect its interface and data.", evidence: "Live application and source repository are available below." },
 "NovaCart": { contribution: "Built a responsive storefront with authentication, cart, checkout and order history.", decision: "Used React for the interface, Firebase for accounts and Stripe for checkout.", evidence: "The live application is available below; production payment behavior has not been independently verified here." },
};
function Projects() {
 const [filter, setFilter] = useState("All");
 const trackRef = useRef<HTMLDivElement>(null);
 const slideFrame = useRef<number | null>(null);
 useEffect(() => () => { if (slideFrame.current !== null) cancelAnimationFrame(slideFrame.current); }, []);
 const [navigation, setNavigation] = useState({ back: false, forward: false, first: 1, last: 3 });
 const ordered = [...projects].sort((a,b) => {
  const order = ["NovaCart", "MediLink Zimbabwe", "OAK Foundation", "Tiger Motors", "Todo Application", "Temperature Converter", "Landing Page", "Sideby Chat", "NetPulse AI", "SafeJourney"];
  return (order.includes(a.title) ? order.indexOf(a.title) : 99) - (order.includes(b.title) ? order.indexOf(b.title) : 99);
 });
 const visible = ordered.filter((project) => filter === "All" || project.tags.includes(filter));
 useEffect(() => {
  const track = trackRef.current;
  if (!track) return;
  if (slideFrame.current !== null) cancelAnimationFrame(slideFrame.current);
  slideFrame.current = null;
  track.style.scrollSnapType = "";
  track.style.scrollBehavior = "";
  track.scrollLeft = 0;
  const update = () => {
   if (window.matchMedia("(max-width: 600px)").matches) {
    setNavigation({ back: false, forward: false, first: 1, last: visible.length });
    return;
   }
   const card = track.querySelector("article");
   const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
   const step = (card?.getBoundingClientRect().width ?? track.clientWidth) + gap;
   const first = Math.round(track.scrollLeft / step) + 1;
   const count = Math.max(1, Math.round((track.clientWidth + gap) / step));
   setNavigation({ back: track.scrollLeft > 1, forward: track.scrollLeft + track.clientWidth < track.scrollWidth - 1, first, last: Math.min(visible.length, first + count - 1) });
  };
  update();
  const observer = new ResizeObserver(update);
  observer.observe(track);
  track.addEventListener("scroll", update);
  return () => { observer.disconnect(); track.removeEventListener("scroll", update); };
 }, [filter, visible.length]);
 const browse = (direction: number) => {
  const track = trackRef.current;
  if (!track) return;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  if (slideFrame.current !== null) return;
  const start = track.scrollLeft;
  const target = Math.max(0, Math.min(track.scrollWidth - track.clientWidth, start + direction * (track.clientWidth + gap)));
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (preference.matches) { track.scrollLeft = target; return; }
  const started = performance.now();
  const animate = (now: number) => {
   const progress = preference.matches ? 1 : Math.min((now - started) / 800, 1);
   const eased = progress * progress * (3 - 2 * progress);
   track.scrollLeft = start + (target - start) * eased;
   if (progress < 1) slideFrame.current = requestAnimationFrame(animate);
   else { track.scrollLeft = target; track.style.scrollSnapType = ""; track.style.scrollBehavior = ""; slideFrame.current = null; }
  };
  track.style.scrollSnapType = "none";
  track.style.scrollBehavior = "auto";
  slideFrame.current = requestAnimationFrame(animate);
 };
 return <section id="projects" className="section projects-section"><div className="section-container">
  <div className="section-header projects-header"><span className="section-eyebrow">SELECTED WORK</span><h2>Projects with purpose</h2><p className="projects-intro">A closer look at what I built, the decisions behind it, and how it works.</p></div>
  <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects by technology">{filters.map((item) => <button type="button" key={item} aria-pressed={filter === item} aria-controls="project-results" onClick={() => setFilter(item)}>{item}</button>)}</div><p className="project-count" role="status">{navigation.first}–{navigation.last} of {visible.length} projects</p></div>
  <div className="project-navigation" role="group" aria-label="Browse projects">
   <button type="button" aria-label="Previous projects" aria-controls="project-results" disabled={!navigation.back} onClick={() => browse(-1)}><ChevronLeft aria-hidden="true" /></button>
   <button type="button" aria-label="Next projects" aria-controls="project-results" disabled={!navigation.forward} onClick={() => browse(1)}><ChevronRight aria-hidden="true" /></button>
  </div>
  <div className="projects-grid projects-carousel" ref={trackRef} id="project-results" role="region" aria-label="Project carousel" tabIndex={0}>{visible.map((project) => <FlippingProject key={project.title} project={project} />)}</div>

 </div></section>;
}
export default Projects;

function FlippingProject({ project }: { project: (typeof projects)[number] }) {
 const [flipped, setFlipped] = useState(false);
 const viewButton = useRef<HTMLButtonElement>(null);
 const backButton = useRef<HTMLButtonElement>(null);
 const changeSide = (next: boolean) => {
  setFlipped(next);
  requestAnimationFrame(() => (next ? backButton : viewButton).current?.focus({ preventScroll: true }));
 };
 return <article className={`project-card flip-project${flipped ? " is-flipped" : ""}`} onKeyDown={(event) => { if (event.key === "Escape" && flipped) { event.preventDefault(); changeSide(false); } }}>
  <div className="flip-project-inner">
   <div className="flip-project-front" inert={flipped} aria-hidden={flipped}>
    <div className="project-image">{project.image ? <img src={project.image} alt={`${project.title} interface`} loading="lazy" width={720} height={450} /> : <div className="project-placeholder"><MessageCircle size={44} aria-hidden="true" /><span>sideby</span><small>Realtime conversations</small></div>}</div>
    <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p>
     <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
     <ProjectLinks project={project} />
     <button type="button" ref={viewButton} className="project-details-button" onClick={() => changeSide(true)} aria-label={`View details for ${project.title}`}>View details <ArrowUpRight size={16} aria-hidden="true" /></button>
    </div>
   </div>
   <div className="flip-project-back" inert={!flipped} aria-hidden={!flipped}>
    <div className="flip-details-scroll" tabIndex={flipped ? 0 : -1}>
     <span className="section-eyebrow">BEHIND THE BUILD</span><h3>{project.title}</h3><p>{project.description}</p>
     <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
     {notes[project.title] && <dl><dt>Contribution</dt><dd>{notes[project.title].contribution}</dd><dt>Technical decision</dt><dd>{notes[project.title].decision}</dd><dt>Verification</dt><dd>{notes[project.title].evidence}</dd></dl>}
     <ProjectLinks project={project} />
    </div>
    <button type="button" ref={backButton} className="project-details-button" onClick={() => changeSide(false)}><RotateCcw size={16} aria-hidden="true" /> Back to preview</button>
   </div>
  </div>
 </article>;
}
function ProjectLinks({ project }: { project: (typeof projects)[number] }) {
 return <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Source code <ArrowUpRight size={16} aria-hidden="true" /></a>}{project.liveDemo ? <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live app <ArrowUpRight size={16} aria-hidden="true" /></a> : <span className="project-local-note">Runs locally - deployment pending</span>}</div>;
}
