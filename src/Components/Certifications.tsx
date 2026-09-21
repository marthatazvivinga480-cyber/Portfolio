function Certifications() {
  const certificates = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "Scrimba",
      date: "",
      link: "https://www.coursera.org/account/accomplishments/certificate/ES52ATRUMW5D",
      external: true,
    },
    {
      title: "Python Programming Fundamentals",
      issuer: "Microsoft",
      date: "",
      link: "https://www.coursera.org/account/accomplishments/certificate/RSDQR69GTPEF",
      external: true,
    },
    {
      title: "React Basics",
      issuer: "Meta",
      date: "",
      link: "",
      external: false,
    },
    {
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      date: "",
      link: "",
      external: false,
    },
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-container">
        <div className="section-header certifications-header">
          <span className="section-eyebrow">CERTIFICATIONS</span>
          <h2>Learning Achievements</h2>
        </div>

        <div className="cert-grid">
          {certificates.map((cert) => (
            <div className="cert-card" key={cert.title}>
              <h3>{cert.title}</h3>
              <p className="cert-meta">
                <span>{cert.issuer}</span>
                {cert.date ? <span> • {cert.date}</span> : null}
              </p>
              {cert.link ? <a
                href={cert.link}
                target={cert.external ? "_blank" : undefined}
                rel={cert.external ? "noopener noreferrer" : undefined}
                className="cert-link"
              >
                View Certificate →
              </a> : <span className="cert-meta">Certificate link unavailable</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
