import style from "./Profile.module.scss"
import {Preloader} from "../Preloader/Preloader";
import React, {ChangeEvent} from "react";
import avatar from "../Dialogs/DialogItem/avatar1.png";
import bg from './bg.jpg'
import {ProfileStatus} from "./ProfileInfo/ProfileStatus";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import editPhotoIcon from './editPhoto.png'
import {ProfilePropsType} from "./ProfileContainer";

type Props = ProfilePropsType & {
  isMyPage: boolean
}

function Profile(props: Props) {

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
             src={bg}
             alt="preview"/>
        <div className={style.profileInfoWrapper}>
          <div className={style.editableAvatar}>
            {props.isMyPage && <label className={style.uploadPhoto} htmlFor='uploadPhoto'>
              <img src={editPhotoIcon} alt="edit photo"/>
            </label>}
            <input id={'uploadPhoto'} className={style.uploadInput} type="file" onChange={uploadPhotoHandler}/>
            <img className={style.avatar}
                 src={props.userProfile.photos.large || avatar}
                 alt="avatar"/>
          </div>
          <span className={style.name}>{props.userProfile.fullName}</span>
          <ProfileStatus status={props.status} callBack={props.updateProfileStatusTC}/>
          <ProfileInfo userInfo={props.userProfile} isMyPage={props.isMyPage}
                       updateProfile={props.updateProfileInfoTC} error={props.error} setError={props.setError}/>
          <MyPostsContainer/>
        </div>
      </div>
  )
}

export default Profile;