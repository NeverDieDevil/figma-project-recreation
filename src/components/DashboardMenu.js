import "../styles/DashboardMenu.scss";
import Home from "../images/home.svg";
import Documents from "../images/documents.svg";
import Payment from "../images/payments.svg";
import Calendar from "../images/calendar.svg";
import Profile from "../images/profile.svg";
import Settings from "../images/settings.svg";
import Logout from "../images/logout.svg";
import Tile from "./Tile";
import MenuOption from "./MenuOption";

const DashboardMenu = () => {
  const options = [
    {
      icon: Home,
      text: "Dashboard",
    },
    {
      icon: Documents,
      text: "Documents",
    },
    {
      icon: Payment,
      text: "Payments",
    },
    {
      icon: Calendar,
      text: "Calendar",
    },
    {
      icon: Profile,
      text: "Profile",
    },
    {
      icon: Settings,
      text: "Setting",
    },
    {
      icon: Logout,
      text: "Logout",
    },
  ];
  return (
    <Tile>
      <div className="dashboardMenu">
        {options.forEach((ele, index) => {
          <MenuOption icon={ele.icon} text={ele.text} />;
        })}
      </div>
    </Tile>
  );
};

export default DashboardMenu;
