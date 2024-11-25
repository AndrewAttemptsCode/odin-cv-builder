import '../../styles/Education.css';
import EducationItem from './EducationItem';
import { useState } from "react";
import { cvData } from "./data";

let idIndex = 1;

export default function Education() {

  const [educationList, setEducationList] = useState(cvData[0].education);

  function addEducationItem() {

    setEducationList([
      ...educationList,
      {
        id: idIndex++,
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
      }
    ]);
  }

  function updateEducationItem(id, updatedItem) {
    setEducationList((prevList) => 
    prevList.map((item) => (item.id === id ? updatedItem : item))
    );
  }

  function onRemoveItem(id) {
    setEducationList((prevList) => 
    prevList.filter((item) => (item.id !== id))
    );
  }

  return (
    <div className='education-info'>
      <h2>Education</h2>
      {educationList.map((educationItem) => (
        <EducationItem
          key={educationItem.id}
          education={educationItem}
          onChange={(updatedItem) => updateEducationItem(educationItem.id, updatedItem)}
          removeItem={() => onRemoveItem(educationItem.id)}
        />
      ))}
      <button
        onClick={addEducationItem}>
          Add New Education
      </button>
    </div>
  );
}