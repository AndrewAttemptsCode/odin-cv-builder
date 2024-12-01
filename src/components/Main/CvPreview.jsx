import "../../styles/CvPreview.css";
import iconEmail from "../../images/icon-email.png";
import iconLocation from "../../images/icon-location.png";
import iconGithub from "../../images/icon-github.png";

export default function CvPreview({ personalInfo, educationList, workList }) {
  return (
    <div className="cv-preview">
      <section className="cv-personal-info">
        <h1 className="cv-fullname">{personalInfo.firstName} {personalInfo.lastName}</h1>
        <p><img src={iconLocation} alt="" /> {personalInfo.location} | <img src={iconEmail} alt="" /> {personalInfo.email} | <img src={iconGithub} alt="" /> {personalInfo.github}</p>
      </section>

      <section className="cv-education-info">
        <h2>Education</h2>
        <hr className="thick-rule" />
        {educationList.map((educationItem, index) => (
          <div key={educationItem.id} className="cv-item">
            <div className="cv-header">
              <div className="cv-name">
                <h3>{educationItem.schoolName}</h3>
                <span>-</span>
                <p>{educationItem.location}</p>
              </div>
              <div className="cv-dates">
                <p>{educationItem.startDate} - {educationItem.endDate}</p>
              </div>
            </div>
            <p>{educationItem.title}</p>
            {index < educationList.length - 1 && <hr />}
          </div>
        ))}
      </section>

      <section className="cv-work-info">
        <h2>Work Experience</h2>
        <hr className="thick-rule" />
        {workList.map((workItem, index) => (
          <div key={workItem.id} className="cv-work-item">
            <div className="cv-header">
              <div className="cv-name">
                <h3>{workItem.companyName}</h3>
                <span>-</span>
                <p>{workItem.location}</p>
              </div>
              <div className="cv-dates">
                <p>{workItem.startDate} - {workItem.endDate}</p>
              </div>
            </div>
            <p>{workItem.position}</p>
            <ul className="cv-list">
              {workItem.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            {index < workList.length - 1 && <hr />}
          </div>
        ))}
      </section>
      
    </div>
  );
}