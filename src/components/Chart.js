import "../styles/Chart.scss";
import Tile from "./Tile";

const Chart = (props) => {
  const { image, text } = props;
  return (
    <Tile>
      <div className="chart">
        <span className="chartDescription">{text}</span>
        <img src={image} />
      </div>
    </Tile>
  );
};

export default Chart;
