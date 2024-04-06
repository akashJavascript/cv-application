import { useState } from 'react';
import '../styles/Skills.css';
function Skills() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const addSkill = () => {
    setSkills([...skills, skill]);
    setSkill('');
  };
  return (
    <div className="skills">
      <form action="">
        <label htmlFor="skill">Skill:</label>
        <input
          type="text"
          id="skill"
          value={skill}
          onChange={e => setSkill(e.target.value)}
        />
        <button type="button" onClick={addSkill}>
          Add Skill
        </button>
      </form>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default Skills;
