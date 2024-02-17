import { useState } from "react";
import "./SkillForm.scss";

const SkillForm = () => {
  const [categories, setCategories] = useState([
    { id: 1, category: "", skills: [{ id: 1, name: "", description: "" }] },
  ]);

  const handleCategoryChange = (index, event) => {
    const newCategories = [...categories];
    newCategories[index].category = event.target.value;
    setCategories(newCategories);
  };

  const handleSkillChange = (categoryIndex, skillIndex, event) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].skills[skillIndex][event.target.name] =
      event.target.value;
    setCategories(newCategories);
  };

  const addSkill = (categoryIndex) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].skills.push({
      id: Date.now(),
      name: "",
      description: "",
    });
    setCategories(newCategories);
  };

  const addCategory = () => {
    setCategories(
      categories.concat({
        id: Date.now(),
        category: "",
        skills: [{ id: Date.now(), name: "", description: "" }],
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(categories);
  };

  return (
    <>
      <div className="skills-form__title">
        <h2>Data for the Skills Page</h2>
      </div>
      <form onSubmit={handleSubmit} className="skills-form">
        {categories.map((category, categoryIndex) => (
          <div key={category.id}>
            <label>
              Category:
              <input
                type="text"
                value={category.category}
                onChange={(event) => handleCategoryChange(categoryIndex, event)}
              />
            </label>
            {category.skills.map((skill, skillIndex) => (
              <div key={skill.id}>
                <label>
                  Skill Name:
                  <input
                    type="text"
                    name="name"
                    value={skill.name}
                    onChange={(event) =>
                      handleSkillChange(categoryIndex, skillIndex, event)
                    }
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={skill.description}
                    onChange={(event) =>
                      handleSkillChange(categoryIndex, skillIndex, event)
                    }
                  ></textarea>
                </label>
              </div>
            ))}
            <button type="button" onClick={() => addSkill(categoryIndex)}>
              Add Skill
            </button>
          </div>
        ))}
        <button type="button" onClick={addCategory}>
          Add Category
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SkillForm;
