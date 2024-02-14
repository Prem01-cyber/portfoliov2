import "./Landing.scss";
import { FaGithubAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="landing">
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
            <FaGithubAlt size="40px" />
            <FaLinkedinIn size="40px" />
            <FaInstagram size="40px" />
          </div>
        </div>
        <div className="aboutme-content-right">
          <div className="aboutme-image">
            <img src={"https://picsum.photos/600"} alt="Your Name" />
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
