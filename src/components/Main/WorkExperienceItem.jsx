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
      </form>
      <button className="btn-small" onClick={removeItem}>Remove</button>
    </div>
  );
}