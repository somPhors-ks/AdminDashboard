import "./SavingGoal.css";

const SavingGoal = () => {
  return (
    <div className="saving-container">
      <div className="saving-item">
        <p className="saving-text-title">Funds saved</p>
        <p className="saving-text-desc">49% of target</p>
        <p className="saving-price">29.3K</p>
      </div>

      <div className="saving-item save-active">
        <p className="saving-text-title">Budget Left</p>
        <p className="saving-text-desc">In Progress</p>
        <p className="saving-price">16.3K</p>
      </div>

      <div className="saving-item">
        <p className="saving-text-title">Avtive Funds</p>
        <p className="saving-text-desc">In Progress</p>
        <p className="saving-price">8</p>
      </div>

      <div className="saving-item">
        <p className="saving-text-title">Project Annual</p>
        <p className="saving-text-desc">In Progress</p>
        <p className="saving-price">32.9K</p>
      </div>
    </div>
  );
};
export default SavingGoal;
