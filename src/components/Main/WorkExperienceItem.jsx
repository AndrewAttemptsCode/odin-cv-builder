import { useState } from "react";
import "../../styles/WorkExperienceItem.css";

export default function WorkExperienceItem({ work, onChange, removeItem }) {

  const [hideForm, setHideForm] = useState(false);

  function handleChange(event) {
    const {name, value} = event.target;

    onChange({
      ...work,
      [name]: value,
    });
  }

  function handleResponsibility(event, index) {
    const updatedResponsibilities = [...work.responsibilities];
    updatedResponsibilities[index] = event.target.value;
    
    onChange({
      ...work,
      responsibilities: updatedResponsibilities,
    });
  }

  function handleAddNewResponsibility(event) {
    event.preventDefault();

    onChange({
      ...work,
      responsibilities: [...work.responsibilities, ""],
    })
  }

  function handleRemoveResponsibility(event, index) {
    event.preventDefault();

    const updatedResponsibilities = work.responsibilities.filter(
      (_, i) => i !== index);

    onChange({
      ...work,
      responsibilities: updatedResponsibilities,
    })

  }

  function handleHideClick() {
    setHideForm(!hideForm);
  }

  return hideForm ? (
    <div className="work-item compact">
      <p>{work.companyName}</p>
      <button className="btn-small" onClick={handleHideClick}>
        Show
      </button>
    </div>
  ) : (
    <div className="work-item">
      <button className="btn-small" onClick={handleHideClick}>
        Hide
      </button>
      <form>
        <label>
          Company Name:
          <input
          type="text"
          name="companyName"
          value={work.companyName}
          onChange={handleChange}
          />
        </label>
        <label>
          Company Position:
          <input
          type="text"
          name="position"
          value={work.position}
          onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
          type="text"
          name="location"
          value={work.location}
          onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
          type="text"
          name="startDate"
          value={work.startDate}
          onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
          type="text"
          name="endDate"
          value={work.endDate}
          onChange={handleChange}
          />
        </label>
        <div className="compact">
          <span>
            Responsibilities:
          </span>
          <button onClick={handleAddNewResponsibility}>+ add</button>
        </div>
        {work.responsibilities.map((responsibility, index) => (
          <div key={index} className="responsibility-item">
            <div className="compact">
              <label htmlFor={`responsibility-${index}`}>
                Responsibility {index + 1}:
              </label>
              <button className="btn-small" onClick={(event) => handleRemoveResponsibility(event, index)}>-</button>
            </div>
            <input id={`responsibility-${index}`} type="text" value={responsibility} onChange={(event) => handleResponsibility(event, index)} />
          </div>
        ))}
    </form>
    <button className="btn-small" onClick={removeItem}>Remove Work</button>
    </div>
  );
}