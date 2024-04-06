import '../styles/App.css';
import GeneralInfo from './GeneralInfo';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import { useState } from 'react';
function App() {
  const [workExperienceCount, setWorkExperienceCount] = useState(1);

  const addWorkExperience = () => {
    setWorkExperienceCount(workExperienceCount + 1);
    
  };

  let workExperiences = [];
  for (let i = 0; i < workExperienceCount; i++) {
    workExperiences.push(<WorkExperience key={i} />);
  }

  return (
    <>
      <h1>React Form</h1>
      <h2>General Info</h2>
      <GeneralInfo />
      <h2>Work Experience</h2>
      {workExperiences}
      <button className="addNew" onClick={addWorkExperience}>
        +
      </button>
      <h2>Skills</h2>
      <Skills />
    </>
  );
}

export default App;
