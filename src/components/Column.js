import "../styles/Column.scss";
import Tile from "./Tile";

const Column = (props) => {
  return <div className="column">{props.children}</div>;
};

export default Column;
