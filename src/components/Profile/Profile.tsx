import React from "react";
import style from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
  state: ProfilePageType
  addPostCallback: () => void
  changePostCallback: (value: string) => void
  postValue: string
}

function Profile(props: ProfilePropsType) {

  return (
    <div className={style.content}>
      <ProfileInfo/>
      <MyPosts
        posts={props.state.posts}
        addPostCallback={props.addPostCallback}
        changePostCallback={props.changePostCallback}
        postValue={props.postValue}
      />
    </div>
  )
}

export default Profile;