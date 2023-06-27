import style from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/profile-reducer";
import {ActionType} from "../../redux/redux-store";

type ProfilePropsType = {
  state: ProfilePageType
  dispatch: (action: ActionType) => void
  postValue: string
}

function Profile(props: ProfilePropsType) {

  return (
    <div className={style.content}>
      <ProfileInfo/>
      <MyPosts
        posts={props.state.posts}
        dispatch={props.dispatch}
        postValue={props.postValue}
      />
    </div>
  )
}

export default Profile;