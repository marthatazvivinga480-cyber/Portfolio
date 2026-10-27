import { ArrowUp, ArrowUpRight, Code2, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-intro">
            <a href="#home" className="footer-brand">
              <span className="footer-mark" aria-hidden="true"><Code2 size={20} /></span>
              Martha Tazvivinga
            </a>
            <p>Thoughtful design. Purposeful code.</p>
          </div>

          <div className="footer-connect">
            <div className="footer-socials">
              <a href="https://github.com/marthatazvivinga480-cyber" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://linkedin.com/in/martha-tazvivinga-b307783b0" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="mailto:marthatazvivinga480@gmail.com"><Mail size={15} aria-hidden="true" /> Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Martha Tazvivinga. All rights reserved.</p>
          <a href="#home" className="footer-top">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
