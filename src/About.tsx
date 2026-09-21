import { MapPin, GraduationCap, BriefcaseBusiness } from "lucide-react";

function About() {
  const infoItems = [
    {
      title: "Location",
      value: "Harare, Zimbabwe",
      icon: <MapPin aria-hidden="true" strokeWidth={1.8} />,
    },
    {
      title: "Education",
      value: "Software Engineering (In Progress)",
      icon: <GraduationCap aria-hidden="true" strokeWidth={1.8} />,
    },
    {
      title: "Experience",
      value: "Student & Volunteer",
      icon: <BriefcaseBusiness aria-hidden="true" strokeWidth={1.8} />,
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header about-header">
          <span>About Me</span>
          <h2>Student Software Engineer</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an aspiring Software Engineer with a background in Business
              Management and Entrepreneurship. I enjoy building responsive web
              applications, learning new technologies, and turning ideas into
              real-world solutions.
            </p>
            <p>
              Currently studying Software Engineering and contributing to
              projects that improve both design and performance for modern users.
            </p>
          </div>

          <div className="about-cards">
            {infoItems.map((item) => (
              <div className="info-card" key={item.title}>
                <div className="info-icon">{item.icon}</div>
                <h3 className="info-label">{item.title}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;