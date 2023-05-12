import React from "react";
import style from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../index";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  posts: PostType[]
}

function Profile(props: ProfilePropsType) {

  return (
    <div className={style.content}>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  )
}

export default Profile;