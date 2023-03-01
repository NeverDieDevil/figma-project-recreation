import "../styles/MenuOption.scss";

const MenuOption = (props) => {
  console.log("generating menu option");
  const { icon, text } = props;
  return (
    <div className="menuOption">
      {/* <img src={icon} /> */}
      <span>{text}</span>
    </div>
  );
};

export default MenuOption;
