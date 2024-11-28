import "../../styles/CvPreview.css";

export default function CvPreview({ personalInfo }) {
  return (
    <div className="cv-preview">
      <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
    </div>
  );
}