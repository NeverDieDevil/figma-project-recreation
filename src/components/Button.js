import "../styles/Button.scss";
import Tile from "./Tile";
import InfoCircle from "./InfoCircle";

const Button = (props) => {
  const { image, number } = props;
  return (
    <Tile>
      <div className="btn">
        <img src={image} />
        <InfoCircle number={number} />
      </div>
    </Tile>
  );
};

export default Button;
