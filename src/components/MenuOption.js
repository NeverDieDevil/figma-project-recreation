import { Fragment } from "react";
import "../styles/MenuOption.scss";

const MenuOption = (props) => {
  const { index, icon, text, style } = props;
  return (
    <Fragment>
      <div className={`menuOption ${style}`}>
        <img src={icon} />
        <span className="optionText">{text}</span>
      </div>
      {index == 4 ? <div className="bar"></div> : null}
    </Fragment>
  );
};

export default MenuOption;
