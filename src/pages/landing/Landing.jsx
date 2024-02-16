import "./Landing.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

const Landing = () => {
  const [showNewNavbar, setShowNewNavbar] = useState(false);
  const [navbarClass, setNavbarClass] = useState("hidden");
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const instagramRef = useRef(null);
  const twitterRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navigateToSplash = () => {
    navigate("/");
  };

  const navigateToSection = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const icons = [
      githubRef.current,
      linkedinRef.current,
      instagramRef.current,
      twitterRef.current,
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (!showNewNavbar) {
          setShowNewNavbar(true);
          setNavbarClass("visible");
        }
      } else {
        if (showNewNavbar) {
          setShowNewNavbar(false);
          setNavbarClass("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNewNavbar]);

  return (
    <div className="landing">
      <motion.div className="progress-bar" style={{ scaleX }}></motion.div>

      <div className={`navbar-new ${navbarClass}`}>
        <a href="#aboutme" onClick={navigateToSection}>
          About Me
        </a>{" "}
        |
        <a href="#education" onClick={navigateToSection}>
          Education
        </a>{" "}
        |
        <a href="#projects" onClick={navigateToSection}>
          Projects
        </a>{" "}
        |
        <a href="#contact" onClick={navigateToSection}>
          Contact
        </a>
      </div>

      <section className="navbar">
        <div className="navbar-logo" onClick={navigateToSplash}>
          Your Name
        </div>
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

      <section id="aboutme" className="aboutme">
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
            <div ref={twitterRef}>
              <FaTwitter size="40px" className="twitter-icon" />
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

      <section id="education" className="education">
        <div className="education-title">Education</div>
        <div className="education-container">
          <div className="education-entry">
            <div className="college-name">College Name One</div>
            <div className="degree">
              Bachelor of Science in Computer Science
            </div>
            <div className="years">2015 - 2019</div>
            <div className="description">
              Summarize your experience or highlight any special achievements
              during your time here.
            </div>
          </div>
          <div className="education-entry">
            <div className="college-name">College Name Two</div>
            <div className="degree">
              Master of Science in Software Engineering
            </div>
            <div className="years">2020 - 2022</div>
            <div className="description">
              Provide details about your master&rsquo;s degree, any notable
              projects, thesis work, or academic recognitions.
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-title">My Projects</div>
        <div className="projects__project">
          <h2 className="projects__title">Project Title</h2>
          <div className="projects__desc">
            <div className="projects__image">
              <img src="https://picsum.photos/300" alt="Project Title" />
            </div>
            <div className="projects__details">
              <p className="projects__description">
                Brief description of the project, its goals, the problems it
                solves, technologies used, etc.
              </p>
              <div className="projects__buttons">
                <button href="project-url" className="projects__button">
                  View Project
                </button>
                <button href="code-repository-url" className="projects__button">
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div className="projects__icons">
            <div className="projects__icon">
              Project Icon 1 (e.g., technology used)
            </div>
            <div className="projects__icon">Project Icon 2</div>
            <div className="projects__icon">Project Icon 3</div>
            <div className="projects__icon">Project Icon 4</div>
          </div>
        </div>

        <div className="projects__project">
          <h2 className="projects__title">Project Title</h2>
          <div className="projects__desc">
            <div className="projects__image">
              <img src="https://picsum.photos/300" alt="Project Title" />
            </div>
            <div className="projects__details">
              <p className="projects__description">
                Brief description of the project, its goals, the problems it
                solves, technologies used, etc.
              </p>
              <div className="projects__buttons">
                <button href="project-url" className="projects__button">
                  View Project
                </button>
                <button href="code-repository-url" className="projects__button">
                  View Code
                </button>
              </div>
            </div>
          </div>
          <div className="projects__icons">
            <div className="projects__icon">
              Project Icon 1 (e.g., technology used)
            </div>
            <div className="projects__icon">Project Icon 2</div>
            <div className="projects__icon">Project Icon 3</div>
            <div className="projects__icon">Project Icon 4</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="contact-title">My Contact</h2>
      </section>

      <section id="footer" className="footer">
        <div className="footer-content">
          <p>
            &copy; 2021 Your Name. All rights reserved. Designed and developed
            by Your Name.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
