import { EducationForm, SkillForm, LandingForm } from "../../forms";
import "./Data.scss";

const Data = () => {
  return (
    <div className="data">
      <h1>Data for portfolio</h1>

      <section className="landing-form">
        <LandingForm />
      </section>

      <section className="skills-form">
        <SkillForm />
      </section>

      <section className="education-form">
        <EducationForm />
      </section>
    </div>
  );
};

export default Data;
