import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";

export default function InputSection({ personalInfo, setPersonalInfo, educationList, setEducationList }) {
  return (
    <section className="inputSection">
      <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <Education educationList={educationList} setEducationList={setEducationList} />
      <WorkExperience />
    </section>
  );
}