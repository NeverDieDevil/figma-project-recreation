import "../styles/ProfilePic.scss";

const ProfilePic = (props) => {
  const { image, style, name, status, border, isActive } = props.profile;
  return (

    <div className={`profile ${style}`} >
      <div className={`profilePic ${style}`} style={{borderColor: border}}>
        <img className={style}  src={image} alt={image} />
        <div className={isActive && 'isActive'}></div>
      </div>
      <div className="details">
      <span className="profileName">{name}</span>
      <span className="profileTitle">{status}</span>
      </div>
    </div>

  );
};

export default ProfilePic;
