import style from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {}

function Profile(props: ProfilePropsType) {

  return (
    <div className={style.content}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;