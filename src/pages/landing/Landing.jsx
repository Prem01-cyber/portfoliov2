import "./Landing.scss";

const Landing = () => {

  return (
    <div className="landing">
      <section className="aboutme">
        <div className="aboutme-title">
          Title
        </div>
        <div className="aboutme-details">
          Details
        </div>
      </section>

      <section className="education">
        <div className="education-title">
          Title
        </div>
        <div className="education-details">
          Details
        </div>
      </section>

      <section className="projects">
        <div className="projects-title">
          Project Title
        </div>
        <div className="projects-list">
          Projects List
        </div>
        <div className="projects-item">
          Projects Item
        </div>
        <div className="projects-item__image">
          Projects Item Image
        </div>
        <div className="projects-item__description">
          Projects Item Description
        </div>
      </section>

      <section className="contact">
        <div className="contact-form">
          Contact Form
        </div>
        <div className="contact-details">
          Contact Details
        </div>
      </section>
    </div>
  );
};

export default Landing;
