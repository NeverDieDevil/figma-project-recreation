import "../styles/Search.scss";
import InfoCircle from "./InfoCircle";
import Tile from "./Tile";

const Search = (props) => {
  const { image, number } = props;
  return (
    <Tile>
      <div className="search">
        <img src={image} />
        <span>Tap here to search</span>
      </div>
    </Tile>
  );
};

export default Search;
