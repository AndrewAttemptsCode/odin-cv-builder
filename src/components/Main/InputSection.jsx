import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";

export default function InputSection() {
  return (
    <section className="inputSection">
      <PersonalInfo />
      <Education />
      <WorkExperience />
    </section>
  );
}