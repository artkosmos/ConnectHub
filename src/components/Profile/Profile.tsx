import style from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

function Profile(props: ProfilePropsType) {

  return (
    <div className={style.profileContent}>
      <ProfileInfo {...props}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;