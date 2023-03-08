import "../styles/Profile.scss";
import ProfilePic from "./ProfilePic";
import Tile from "./Tile";
import mainImage from "../images/Vader.jpg";
import ProfileButton from "./ProfileButton";
import Contacts from "../images/contacts.svg";
import Activity from "../images/activity.svg";
import Documents from "../images/documents.svg";

const Profile = (props) => {
  const { profile, contacts } = props;
//   console.log(contacts);
  return (
    <Tile>
      <div className="profileDash">
        <ProfilePic profile={profile} />
        <div className="profileButtons">
          <ProfileButton image={Contacts} />
          <ProfileButton image={Activity} />
          <ProfileButton image={Documents} />
        </div>
        <div className="bar"></div>
        <div className="aboutContainer">
          <span className="about">About</span>
          <span className="description">Organized activities to make money and sell goods and services for a profit</span>
        </div>
        <div className="contacts">
            {contacts.map(contact => {
                return(
         <ProfilePic profile={contact} />
            )})}
        </div>
      </div>
    </Tile>
  );
};

export default Profile;
