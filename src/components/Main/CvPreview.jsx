import "../../styles/CvPreview.css";

export default function CvPreview({ personalInfo }) {
  return (
    <div className="cv-preview">
      <section className="cv-personal-info">
        <h1 className="cv-fullname">{personalInfo.firstName} {personalInfo.lastName}</h1>
        <p>{personalInfo.location} | {personalInfo.email} | github.com/{personalInfo.github}</p>
      </section>
      
    </div>
  );
}