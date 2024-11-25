import { useState } from 'react';
import '../../styles/EducationItem.css';

export default function EducationItem({ education, onChange, removeItem }) {

  const [hideForm, setHideForm] = useState(false);

  function handleChange(event) {
    const {name, value} = event.target;

    onChange({
      ...education,
      [name]: value,
    });
  }

  function handleHideClick() {
    setHideForm(!hideForm);
  }

  return hideForm ? (
    <div className="education-item compact">
      <p>{education.schoolName}</p>
      <button className='btn-small' onClick={handleHideClick}>
        Show
      </button>
    </div>
  ) : (
    <div className="education-item">
      <button className='btn-small' onClick={handleHideClick}>
        Hide
      </button>
      <form>
        <label>
          School Name:
          <input
            type="text"
            name="schoolName"
            value={education.schoolName}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={education.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="text"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="text"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={education.title}
            onChange={handleChange}
          />
        </label>
      </form>
      <button className='btn-small' onClick={removeItem}>Remove</button>
    </div>
  );
}