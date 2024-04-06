import '../styles/App.css';
import { useState } from 'react';

import WorkExperience from './WorkExperience';
import GeneralInfo from './GeneralInfo';
import Skills from './Skills';
function App() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [workExperience, setWorkExperience] = useState([
    { company: '', position: '', startDate: '', endDate: '', tasks: '' },
  ]);
  const [skills, setSkills] = useState([]);
  return (
    <>
      <h1>React Form</h1>
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
      <h2>Work Experience</h2>
      {workExperience.map((experience, index) => (
        <WorkExperience
          key={index}
          company={experience.company}
          setCompany={value => {
            const newWorkExperience = [...workExperience];
            newWorkExperience[index].company = value;
            setWorkExperience(newWorkExperience);
          }}
          position={experience.position}
          setPosition={value => {
            const newWorkExperience = [...workExperience];
            newWorkExperience[index].position = value;
            setWorkExperience(newWorkExperience);
          }}
          startDate={experience.startDate}
          setStartDate={value => {
            const newWorkExperience = [...workExperience];
            newWorkExperience[index].startDate = value;
            setWorkExperience(newWorkExperience);
          }}
          endDate={experience.endDate}
          setEndDate={value => {
            const newWorkExperience = [...workExperience];
            newWorkExperience[index].endDate = value;
            setWorkExperience(newWorkExperience);
          }}
          tasks={experience.tasks}
          setTasks={value => {
            const newWorkExperience = [...workExperience];
            newWorkExperience[index].tasks = value;
            setWorkExperience(newWorkExperience);
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
      <h2>Skills</h2>
      <Skills skills={skills} setSkills={setSkills} />
    </>
  );
}

export default App;
