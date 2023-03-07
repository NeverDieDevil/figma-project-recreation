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
import Total from "./Total";
import Total1 from "../images/total1.svg";
import Total2 from "../images/total2.svg";
import LineChart from "../images/lineChart.svg";
import BarChart from "../images/barChart.svg";
import Chart from "./Chart";
import ProjectFinance from "./ProjectFinance";
import Person1 from '../images/person1.svg'
import Person2 from '../images/person2.svg'


const getDate = () => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const today = new Date();
  return today.toLocaleDateString("en-Gb", options);
};

const people = [
  {
    image: Person1,
    name: "Michał Obszański",
    progress: "Meet the target",
    value: `$145,000`,
    status: "Financial Officer",
  },
  {
    image: Person2,
    name: "Michał Obszański",
    progress: "Meet the target",
    value: `$145,000`,
    status: "Project Manager",
  },
];

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
        <Row>
          <Total
            text="Total Finance"
            value="9.900k"
            image={Total1}
            style="specialFin"
          />
          <Total
            text="Total Expense"
            value="8.240k"
            image={Total2}
            style="specialExp"
          />
        </Row>
        <Row>
          <Chart text={getDate()} image={LineChart} />
          <Chart text="Your Finance Target" image={BarChart} />
        </Row>
        <Row>
          <ProjectFinance people={people} />
        </Row>
      </Column>
      <Column>
      <DashboardMenu />
        <Upgrade />
      </Column>
    </div>
  );
};

export default Dashboard;
