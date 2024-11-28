import CvPreview from "./CvPreview";

export default function PreviewSection({ personalInfo }) {
  return (
    <section className="preview">
      <CvPreview personalInfo={personalInfo} />
    </section>
  );
}