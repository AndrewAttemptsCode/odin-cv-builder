import '../../styles/PersonalInfo.css';
import { useState } from 'react';
import { cvData } from './data';

export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState(cvData[0].personalInfo);

  function handleChange(event) {
    const { name, value } = event.target;

    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    })
  }

  return (
    <div className='personal-info'>
      <h2>Personal Information</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={personalInfo.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={personalInfo.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={personalInfo.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Github:
          <input
            type="text"
            name="github"
            value={personalInfo.github}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}