import '../styles/Education.css';

function Education({
  school,
  setSchool,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  major,
  setMajor,
}) {
  return (
    <div className="educationForm">
      <form action="">
        <label htmlFor="school">School:</label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={e => setSchool(e.target.value)}
        />
        <label htmlFor="startDate">Start Year:</label>
        <input
          type="number"
          id="startDate"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <label htmlFor="endDate">End Year:</label>
        <input
          type="number"
          id="endDate"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        <label htmlFor="major">Major:</label>
        <input
          type="text"
          id="major"
          value={major}
          onChange={e => setMajor(e.target.value)}
        />
      </form>
    </div>
  );
}
export default Education;