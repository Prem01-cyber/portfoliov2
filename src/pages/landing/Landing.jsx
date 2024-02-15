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
        <a href="#aboutme">About Me</a> |<a href="#education">Education</a> |
        <a href="#projects">Projects</a> |<a href="#contact">Contact</a>
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

      <section className="education">
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

      <section className="footer">
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
