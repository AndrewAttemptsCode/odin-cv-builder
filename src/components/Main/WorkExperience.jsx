import "../../styles/WorkExperience.css"
import WorkExperienceItem from "./WorkExperienceItem";

let idIndex = 2;

export default function WorkExperience({ workList, setWorkList }) {

  function updateWorkItem(id, updatedItem) {
    setWorkList((prevList) => 
    prevList.map((item) => (item.id === id ? updatedItem : item))
  );
  }

  function onRemoveItem(id) {
    setWorkList((prevList) =>
    prevList.filter((item) => (item.id !== id))
    );
  }

  function addWorkItem() {

    setWorkList([
      ...workList,
      {
        id: idIndex++,
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: [""],
      }
    ])
  }

  return (
    <div className="work-info">
      <h2>Work Experience</h2>
      {workList.map((workItem) => (
        <WorkExperienceItem
          key={workItem.id}
          work={workItem}
          onChange={(updatedItem) => updateWorkItem(workItem.id, updatedItem)}
          removeItem={() => onRemoveItem(workItem.id)}
        />
      ))}
      <button
        onClick={addWorkItem}>
        Add New Work
      </button>
    </div>
  );
}