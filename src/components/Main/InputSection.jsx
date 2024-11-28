import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";

export default function InputSection({ personalInfo, setPersonalInfo }) {
  return (
    <section className="inputSection">
      <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      <Education />
      <WorkExperience />
    </section>
  );
}