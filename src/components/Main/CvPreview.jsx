import "../../styles/CvPreview.css";

export default function CvPreview({ personalInfo, educationList }) {
  return (
    <div className="cv-preview">
      <section className="cv-personal-info">
        <h1 className="cv-fullname">{personalInfo.firstName} {personalInfo.lastName}</h1>
        <p>{personalInfo.location} | {personalInfo.email} | github.com/{personalInfo.github}</p>
      </section>

      <section className="cv-education-info">
        <h2>Education</h2>
        <hr className="thick-rule" />
        {educationList.map((educationItem, index) => (
          <div key={educationItem.id} className="cv-education-item">
            <div className="cv-education-header">
              <div className="cv-education-name">
                <h3>{educationItem.schoolName}</h3>
                <span>-</span>
                <p>{educationItem.location}</p>
              </div>
              <div className="cv-education-dates">
                <p>{educationItem.startDate} - {educationItem.endDate}</p>
              </div>
            </div>
            <p>{educationItem.title}</p>
            {index < educationList.length - 1 && <hr />}
          </div>
        ))}
      </section>
      
    </div>
  );
}