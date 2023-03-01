import "../styles/Upgrade.scss";
import Tile from "./Tile";
import UpgradeIcon from "../images/upgrade.svg";

const Upgrade = () => {
  return (
    <Tile>
      <div className="upgrade">
        <img src={UpgradeIcon} />
        <span className="upgradeTitle">Upgrade to Pro</span>
        <span className="upgradeDetails">
          Check your magic on this Pro Dashboard
        </span>
      </div>
    </Tile>
  );
};

export default Upgrade;
