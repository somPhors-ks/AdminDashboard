import Anomailies from "../Component/Anomailies/Anomailies";
import Area_Chart from "../Component/Area_Chart";
import Bar_Chart from "../Component/Bar_Chart";
import Incom from "../Component/Incom/Incom";
import SavingGoal from "../Component/SavingGoal/SavingGoal";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="title">
        <p>Dashboard</p>
      </div>
      <div className="grid-items grid-items_1">
        <div className="area-chart">
          <div className="area-text">
            <p className="text">Spending Trends</p>
          </div>
          <div className="chart">
            <Area_Chart />
          </div>
        </div>

        <div className="record">
          <div className="area-text">
            <p className="text">Incoming Records</p>
          </div>
          <div className="chart">
            <Incom />
          </div>
        </div>
      </div>

      <div className="grid-items grid-items_2">
        <div className="record-123">
          <div className="area-text">
            <p className="text">Monthly Revenue</p>
          </div>
          <div className="chart chart-color">
            <Bar_Chart />
          </div>
        </div>

        <div className="record-123">
          <div className="area-text">
            <p className="text">Spending Anomailies</p>
          </div>
          <div className="chart">
            <Anomailies />
          </div>
        </div>

        <div className="record-123">
          <div className="area-text">
            <p className="text">Saving Goal Report</p>
          </div>
          <div className="chart-goal">
            <SavingGoal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
