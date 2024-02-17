import "./LandingForm.scss";

const LandingForm = () => {
  return (
    <>
      <div className="landing-form__title">
        <h2>Data for the Landing Page</h2>
      </div>
      <form className="landing-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="desc">Description:</label>
        <input type="text" id="desc" name="desc" required />
        <label htmlFor="url">URL:</label>
        <input type="text" id="url" name="url" required />
        <label htmlFor="img">Image:</label>
        <input type="file" id="img" name="img" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LandingForm;
