import '../styles/Skills.css';
import { useState } from 'react';
function Skills({ skills, setSkills }) {
  let [currentSkill, setCurrentSkill] = useState('');
  return (
    <div className="skills">
      <form action="">
        <label htmlFor="skill">Skill:</label>
        <input
          type="text"
          id="skill"
          onChange={e => setCurrentSkill(e.target.value)}
        />
        <button
          onClick={e => {
            e.preventDefault();
            setSkills([...skills, currentSkill]);
          }}
        >
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
