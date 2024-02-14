import "./Landing.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaGithubAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Landing = () => {
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const instagramRef = useRef(null);

  useEffect(() => {
    const icons = [
      githubRef.current,
      linkedinRef.current,
      instagramRef.current,
    ];

    icons.forEach((icon) => {
      gsap.set(icon, { transformOrigin: "center" });

      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.5, duration: 0.3 });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="landing">
      <section className="navbar">
        <div className="navbar-logo">Your Name</div>
        <div className="navbar-links">
          <div className="navbar-link">
            <a href="#aboutme">About Me</a>
          </div>
          <div className="navbar-link">
            <a href="#education">Education</a>
          </div>
          <div className="navbar-link">
            <a href="#projects">Projects</a>
          </div>
          <div className="navbar-link">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </section>

      <section className="aboutme">
        <div className="aboutme-content-left">
          <div className="aboutme-title">Your Name</div>
          <div className="aboutme-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            dui nec nunc tincidunt tincidunt. Praesent euismod, nulla vel
            convallis malesuada, odio erat egestas ipsum, eget iaculis odio
            dolor eget nisi.
          </div>
          <div className="aboutme-contact">
            <div ref={githubRef}>
              <FaGithubAlt size="40px" className="github-icon" />
            </div>
            <div ref={linkedinRef}>
              <FaLinkedinIn size="40px" className="linkedin-icon" />
            </div>
            <div ref={instagramRef}>
              <FaInstagram size="40px" className="instagram-icon" />
            </div>
          </div>
          <div className="aboutme-buttons">
            <button className="aboutme-button">Resume</button>
            <button className="aboutme-button">Contact</button>
          </div>
        </div>
        <div className="aboutme-content-right">
          <div className="aboutme-image">
            <img src={"https://picsum.photos/500"} alt="Your Name" />
          </div>
        </div>
      </section>

      <section className="education">
        <div className="education-title">Title</div>
        <div className="education-details">Details</div>
      </section>

      <section className="projects">
        <div className="projects-title">Project Title</div>
        <div className="projects-list">Projects List</div>
        <div className="projects-item">Projects Item</div>
        <div className="projects-item__image">Projects Item Image</div>
        <div className="projects-item__description">
          Projects Item Description
        </div>
      </section>

      <section className="contact">
        <div className="contact-form">Contact Form</div>
        <div className="contact-details">Contact Details</div>
      </section>
    </div>
  );
};

export default Landing;
