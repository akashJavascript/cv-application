import '../styles/App.css';
import { useState } from 'react';

import WorkExperience from './WorkExperience';
import GeneralInfo from './GeneralInfo';
import Skills from './Skills';
import Education from './Education';
import Cv from './Cv';
function App() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [workExperience, setWorkExperience] = useState([
    { company: '', position: '', startDate: '', endDate: '', tasks: '' },
  ]);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([
    { school: '', startDate: '', endDate: '', major: '' },
  ]);
  function setterFunction(state, setter, index, value, arrItem) {
    const newState = [...state];
    newState[index][arrItem] = value;
    setter(newState);
  }
  return (
    <>
      <div className="form-container">
        <div className="general-info-container form-section">
          <h2>General Info</h2>
          <GeneralInfo
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        </div>
        <div className="work-exp-container form-section">
          <h2>Work Experience</h2>

          {workExperience.map((experience, index) => (
            <WorkExperience
              key={index}
              company={experience.company}
              setCompany={value => {
                setterFunction(
                  workExperience,
                  setWorkExperience,
                  index,
                  value,
                  'company'
                );
              }}
              position={experience.position}
              setPosition={value => {
                setterFunction(
                  workExperience,
                  setWorkExperience,
                  index,
                  value,
                  'position'
                );
              }}
              startDate={experience.startDate}
              setStartDate={value => {
                setterFunction(
                  workExperience,
                  setWorkExperience,
                  index,
                  value,
                  'startDate'
                );
              }}
              endDate={experience.endDate}
              setEndDate={value => {
                setterFunction(
                  workExperience,
                  setWorkExperience,
                  index,
                  value,
                  'endDate'
                );
              }}
              tasks={experience.tasks}
              setTasks={value => {
                setterFunction(
                  workExperience,
                  setWorkExperience,
                  index,
                  value,
                  'tasks'
                );
              }}
            />
          ))}
          <button
            onClick={() =>
              setWorkExperience([
                ...workExperience,
                {
                  company: '',
                  position: '',
                  startDate: '',
                  endDate: '',
                  tasks: '',
                },
              ])
            }
          >
            Add Work Experience
          </button>
        </div>
        <div className="skills-container form-section">
          <h2>Skills</h2>
          <Skills skills={skills} setSkills={setSkills} />
        </div>
        <div className="education-container form-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <Education
              key={index}
              school={edu.school}
              setSchool={value => {
                setterFunction(education, setEducation, index, value, 'school');
              }}
              startDate={edu.startDate}
              setStartDate={value => {
                setterFunction(
                  education,
                  setEducation,
                  index,
                  value,
                  'startDate'
                );
              }}
              endDate={edu.endDate}
              setEndDate={value => {
                setterFunction(education, setEducation, index, value, 'endDate');
              }}
              major={edu.major}
              setMajor={value => {
                setterFunction(education, setEducation, index, value, 'major');
              }}
            />
          ))}
          <button
            onClick={() =>
              setEducation([
                ...education,
                { school: '', startDate: '', endDate: '', major: '' },
              ])
            }
          >
            Add Education
          </button>
        </div>
      </div>
      <div className="cv-container">
        <Cv
          name={name}
          email={email}
          phone={phone}
          zipCode={zipCode}
          workExperience={workExperience}
          skills={skills}
          education={education}
        ></Cv>
      </div>
    </>
  );
}

export default App;
