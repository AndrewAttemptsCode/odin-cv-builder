import Education from "./Education";
import PersonalInfo from "./PersonalInfo";

export default function InputSection() {
  return (
    <section className="inputSection">
      <PersonalInfo />
      <Education />
    </section>
  );
}