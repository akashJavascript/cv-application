import '../styles/WorkExperience.css';
function WorkExperience({
  company,
  setCompany,
  position,
  setPosition,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  tasks,
  setTasks,
}) {
  return (
    <div className="workExpForm">
      <form action="">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        <label htmlFor="tasks">Tasks:</label>
        <textarea
          id="tasks"
          value={tasks}
          onChange={e => setTasks(e.target.value)}
        />
      </form>
    </div>
  );
}
export default WorkExperience;
