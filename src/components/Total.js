import "../styles/Total.scss";
import Tile from "./Tile";

const Total = (props) => {
  const { text, value, image, style } = props;
  return (
    <Tile style={style}>
      <div className="total">
        <div className="text">
          <span className="title">{text}</span>
          <span className="value">{value}</span>
        </div>
        <img src={image} />
      </div>
    </Tile>
  );
};

export default Total;
