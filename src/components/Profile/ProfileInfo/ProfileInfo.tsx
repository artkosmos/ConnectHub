import React from 'react';
import style from "../Profile.module.scss";
import {ProfilePropsType} from "../ProfileContainer";
import {Preloader} from "../../Preloader/Preloader";
import avatar from "../../Dialogs/DialogItem/avatar1.png";

const ProfileInfo = (props: ProfilePropsType) => {

  if (!props.userProfile) {
    return <Preloader/>
  }

  const socialMedia = Object.entries(props.userProfile.contacts)
    .filter(([key, value]) => value)
    .map(item => <li>{item[0]}: {item[1]}</li>)

  return (
    <>
      <img className={style.previewPicture}
           src="https://mp2023.nyc3.digitaloceanspaces.com/689084892688/2021/06/24/thumbnails/a47tusiqw9d2au1a.jpg"
           alt="preview"/>
      <div className={style.profileInfoWrapper}>
        <div className={style.aboutPerson}>
          <img className={style.avatar}
               src={props.userProfile.photos.large ? props.userProfile.photos.large : avatar}
               alt="avatar"/>
          <div className={style.info}>
            <span className={style.name}>{props.userProfile.fullName}</span>
            <span><b>About me:</b> {props.userProfile.aboutMe}</span>
            <span><b>Looking for a job:</b> {props.userProfile.lookingForAJobDescription}</span>
            <ul className={style.socialMediaList}>
              <b>My social networks:</b>
              {socialMedia}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileInfo;