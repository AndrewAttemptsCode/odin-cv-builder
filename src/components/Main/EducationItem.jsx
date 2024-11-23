import '../../styles/EducationItem.css';

export default function EducationItem({ education, onChange }) {

  function handleChange(event) {
    const {name, value} = event.target;

    onChange({
      ...education,
      [name]: value,
    });
  }

  return (
    <div className="education-item">
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
    </div>
  );
}