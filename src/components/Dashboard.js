import "../styles/Dashboard.scss";
import Column from "./Column";
import DashboardMenu from "./DashboardMenu";
import Row from "./Row";
import Search from "./Search";
import Upgrade from "./Upgrade";
import Button from "./Button";
import SearchIcon from "../images/search.svg";
import MessageIcon from "../images/messageicon.svg";
import NotificationIcon from "../images/notificationicon.svg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Column>
        <DashboardMenu />
        <Upgrade />
      </Column>
      <Column>
        <Row>
          <Search image={SearchIcon} />
          <Button image={MessageIcon} number={4} />
          <Button image={NotificationIcon} number={6} />
        </Row>
      </Column>
    </div>
  );
};

export default Dashboard;
