import style from "./Profile.module.scss"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
  store: StoreType
}

function Profile(props: ProfilePropsType) {

  return (
    <div className={style.content}>
      <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default Profile;