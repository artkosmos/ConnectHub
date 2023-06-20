import React from "react";
import style from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
  state: ProfilePageType
  addPostFn: (postValue: string) => void
}

function Profile(props: ProfilePropsType) {

  return (
    <div className={style.content}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts} addPostFn={props.addPostFn}/>
    </div>
  )
}

export default Profile;