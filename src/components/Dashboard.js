import "../styles/Dashboard.scss";
import Column from "./Column";
import DashboardMenu from "./DashboardMenu";
import Upgrade from "./Upgrade";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Column>
        <DashboardMenu />
        <Upgrade />
      </Column>
    </div>
  );
};

export default Dashboard;
