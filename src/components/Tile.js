import "../styles/Tile.scss";

const Tile = (props) => {
  return (
    <div className={`tile ${props.style ? props.style : null}`}>
      {props.children}
    </div>
  );
};

export default Tile;
