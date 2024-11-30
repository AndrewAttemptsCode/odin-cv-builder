import CvPreview from "./CvPreview";

export default function PreviewSection({ personalInfo, educationList }) {
  return (
    <section className="preview">
      <CvPreview personalInfo={personalInfo} educationList={educationList} />
    </section>
  );
}