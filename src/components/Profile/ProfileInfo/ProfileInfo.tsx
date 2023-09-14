import React, {ChangeEvent} from 'react';
import style from "../Profile.module.scss";
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../Preloader/Preloader";
import avatar from "../../Dialogs/DialogItem/avatar1.png";
import {ProfileStatus} from "./ProfileStatus";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const ProfileInfo = (props: ProfilePropsType) => {

  if (!props.userProfile) {
    return <Preloader/>
  }

  const uploadPhotoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      props.updateProfilePhotoTC(event.target.files[0])
    }
  }

  const socialMedia = Object.entries(props.userProfile.contacts)
    .filter(([_, value]) => value)
    .map((item, index) => <li key={index}>{item[0]}: {item[1]}</li>)

  return (
    props.preloader
      ? <Preloader/>
      : <>
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
              <span><b>About me:</b> {props.userProfile.aboutMe}</span>
              <span><b>Looking for a job:</b> {props.userProfile.lookingForAJobDescription}</span>
              <ul className={style.socialMediaList}>
                <b>My social networks:</b>
                {socialMedia}
              </ul>
            </div>
          </div>
        </div>
        <MyPostsContainer/>
      </>
  )
}

export default ProfileInfo;