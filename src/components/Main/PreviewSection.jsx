import CvPreview from "./CvPreview";

export default function PreviewSection({ personalInfo, educationList, workList }) {
  return (
    <section className="preview">
      <CvPreview personalInfo={personalInfo} educationList={educationList} workList={workList} />
    </section>
  );
}