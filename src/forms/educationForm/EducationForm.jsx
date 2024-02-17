import { useState } from "react";
import "./EducationForm.scss";

const EducationForm = () => {
  const [educationEntries, setEducationEntries] = useState([
    { id: 1, collegeName: "", degree: "", years: "", description: "" },
  ]);

  const handleInputChange = (index, event) => {
    const newEntries = [...educationEntries];
    newEntries[index][event.target.name] = event.target.value;
    setEducationEntries(newEntries);
  };

  const addEducationEntry = () => {
    setEducationEntries([
      ...educationEntries,
      {
        id: Date.now(),
        collegeName: "",
        degree: "",
        years: "",
        description: "",
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Education Entries:", educationEntries);
  };

  return (
    <>
      <div className="education-form__title">
        <h2>Data for the Education Page</h2>
      </div>
      <form onSubmit={handleSubmit} className="education-form">
        <h2>Add Your Education</h2>
        {educationEntries.map((entry, index) => (
          <div key={entry.id}>
            <label>
              College Name:
              <input
                type="text"
                name="collegeName"
                value={entry.collegeName}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </label>
            <label>
              Degree:
              <input
                type="text"
                name="degree"
                value={entry.degree}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </label>
            <label>
              Years:
              <input
                type="text"
                name="years"
                value={entry.years}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={entry.description}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addEducationEntry}>
          Add Another Education Entry
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EducationForm;
