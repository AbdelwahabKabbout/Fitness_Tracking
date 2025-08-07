import "./Workout.css";
const Workout = () => {
  return (
    <div className="workout-card">
      <h2 className="workout-title">Workout of the Day</h2>
      <div className="workout-summary">
        <p>
          <strong>Type:</strong> Cardio
        </p>
        <p>
          <strong>Duration:</strong> 30 minutes
        </p>
        <p>
          <strong>Target:</strong> Legs, Core
        </p>
        <p className="workout-notes">
          A high-intensity interval training focused on improving endurance.
        </p>
      </div>
      <div className="workout-actions">
        <button className="btn-complete">Mark as Complete</button>
        <button className="btn-replace">Replace Workout</button>
      </div>
    </div>
  );
};

export default Workout;
