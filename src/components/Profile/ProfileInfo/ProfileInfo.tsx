import style from "../Profile.module.scss";
import {ProfileInfoType} from "../../../API/social-network-api";
import React, {useState} from "react";
import {SendProfileInfoForm} from "../../../SendProfileInfoForm/SendProfileInfoForm";

type ProfileInfoPropsType = {
  userInfo: ProfileInfoType
  isMyPage: boolean
  updateProfile: (profile: any) => void
  error: string | null
  setError: (error: string | null) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

  const [isEdit, setIsEdit] = useState<boolean>(false)

  const editProfileInfoHandler = () => {
    setIsEdit(true)
  }

  const socialMedia = Object.entries(props.userInfo.contacts)
    .filter(([_, value]) => value)
    .map((item, index) => <li key={index}><span className={style.contactName}>{item[0]}</span>: {item[1]}</li>)

  return (
    <>
      {isEdit && <SendProfileInfoForm setError={props.setError} updateProfile={props.updateProfile} isEdit={setIsEdit}
                                      userInfo={props.userInfo}/>}
      {!isEdit && <>
        <span><b>About me:</b> {props.userInfo.aboutMe}</span>
        {props.userInfo.lookingForAJob &&
          <span><b>Looking for a job:</b> {props.userInfo.lookingForAJobDescription}</span>}
        <ul className={style.socialMediaList}>
          <b>My contacts:</b>
          {socialMedia}
        </ul>
        <button onClick={editProfileInfoHandler}>Edit profile</button>
      </>}
      {props.error && <span>{props.error}</span>}
    </>
  )
}
