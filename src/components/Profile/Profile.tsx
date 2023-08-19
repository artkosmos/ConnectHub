import style from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";

function Profile(props: ProfilePropsType) {

  return (
    <div className={style.profileContent}>
      <ProfileInfo {...props}/>
    </div>
  )
}

export default Profile;