import '../styles/ProfileButton.scss'

import Tile from './Tile'

const ProfileButton = (props) => {
   const{image} = props;
  return (

        <div className='profileBtn'>
            <img src={image} alt={image}/>
        </div>
  )
}

export default ProfileButton