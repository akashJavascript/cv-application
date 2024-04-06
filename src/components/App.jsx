import '../styles/App.css';
import { useState } from 'react';

import WorkExperience from './WorkExperience';
import GeneralInfo from './GeneralInfo';
// import Skills from './Skills';
function App() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tasks, setTasks] = useState('');
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
      <WorkExperience
        company={company}
        setCompany={setCompany}
        position={position}
        setPosition={setPosition}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        tasks={tasks}
        setTasks={setTasks}
      />
      
    </>
  );
}

export default App;
