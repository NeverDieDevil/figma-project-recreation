import "../styles/DashboardMenu.scss";
import Home from "../images/home.svg";
import Documents from "../images/documents.svg";
import Payment from "../images/payments.svg";
import Calendar from "../images/calendar.svg";
import Profile from "../images/profile.svg";
import Settings from "../images/settings.svg";
import Logout from "../images/logout.svg";
import Theme from "../images/theme.svg";
import Tile from "./Tile";
import MenuOption from "./MenuOption";
import { Fragment } from "react/cjs/react.production.min";

const DashboardMenu = () => {
  const options = [
    {
      icon: Home,
      text: "Dashboard",
      style: "selected",
    },
    {
      icon: Documents,
      text: "Documents",
      style: "notSelected",
    },
    {
      icon: Payment,
      text: "Payments",
      style: "notSelected",
    },
    {
      icon: Calendar,
      text: "Calendar",
      style: "notSelected",
    },
    {
      icon: Profile,
      text: "Profile",
      style: "notSelected last",
    },
    {
      icon: Theme,
      text: "Darkmode",
      style: "notSelected",
    },
    {
      icon: Settings,
      text: "Setting",
      style: "notSelected",
    },
    {
      icon: Logout,
      text: "Logout",
      style: "logout last",
    },
  ];

  const menu = options.map((ele, index) => {
    // console.log((index = 4));
    return (
      <MenuOption
        index={index}
        icon={ele.icon}
        text={ele.text}
        style={ele.style}
      />
    );
  });
  return (
    <Tile>
      <div className="dashboardMenu">{menu}</div>
    </Tile>
  );
};

export default DashboardMenu;
