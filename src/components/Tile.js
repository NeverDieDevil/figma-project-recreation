import "../styles/Tile.scss";

const Tile = (props) => {
  return <div className="tile">{props.children}</div>;
};

export default Tile;
