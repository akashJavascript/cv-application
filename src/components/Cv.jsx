import '../styles/Cv.css';

function Cv({
  name,
  email,
  phone,
  zipCode,
  workExperience,
  skills,
  education,
}) {
  return (
    <div className="cv">
      <div className="name-general-container">
        <header className="name-header">
          <h1>{name}</h1>
        </header>
        <section className="general-info">
          <p> {email}</p>
          <p>{phone}</p>
          <p> {zipCode}</p>
        </section>
      </div>
      <h2>Work Experience</h2>

      <section className="work-experience-section">
        {workExperience.map((work, index) => (
          <div key={index} className="work-experience">
            <h3>{work.company}</h3>
            <p>{work.position}</p>
            <p>
              {work.startDate} - {work.endDate}
            </p>
            <p>{work.tasks}</p>
          </div>
        ))}
      </section>
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education">
            <p className="education-school">{edu.school}</p>
            <p>{edu.major}</p>
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Cv;
