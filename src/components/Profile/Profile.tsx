import style from "./Profile.module.scss"
import {ProfilePropsType} from "./ProfileContainer";
import {Preloader} from "../Preloader/Preloader";
import React, {ChangeEvent} from "react";
import avatar from "../Dialogs/DialogItem/avatar1.png";
import {ProfileStatus} from "./ProfileInfo/ProfileStatus";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

function Profile(props: ProfilePropsType) {

  if (!props.userProfile) {
    return <Preloader/>
  }

  const uploadPhotoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      props.updateProfilePhotoTC(event.target.files[0])
    }
  }

  return (
    props.preloader
      ? <Preloader/>
      : <div className={style.profileContent}>
        <img className={style.previewPicture}
             src="https://mp2023.nyc3.digitaloceanspaces.com/689084892688/2021/06/24/thumbnails/a47tusiqw9d2au1a.jpg"
             alt="preview"/>
        <div className={style.profileInfoWrapper}>
          {props.isMyPage && <input type="file" onChange={uploadPhotoHandler}/>}
          <div className={style.aboutPerson}>
            <img className={style.avatar}
                 src={props.userProfile.photos.large || avatar}
                 alt="avatar"/>
            <div className={style.info}>
              <span className={style.name}>{props.userProfile.fullName}</span>
              <ProfileStatus status={props.status} callBack={props.updateProfileStatusTC}/>
              <ProfileInfo userInfo={props.userProfile} isMyPage={props.isMyPage}
                           updateProfile={props.updateProfileInfoTC} error={props.error} setError={props.setError}/>
            </div>
          </div>
        </div>
        <MyPostsContainer/>
      </div>
  )
}

export default Profile;