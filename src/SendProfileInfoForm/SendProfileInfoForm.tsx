import React from 'react';
import {useFormik} from 'formik';
import style from './SendProfileInfoForm.module.scss'
import {ResponseProfileType} from "../API/social-network-api";

type SendProfileInfoFormProps = {
  updateProfile: (profile: any) => void
  isEdit: (value: boolean) => void
  userInfo: ResponseProfileType
}

export const SendProfileInfoForm = ({userInfo, updateProfile, isEdit}: SendProfileInfoFormProps) => {

  const formik = useFormik({
    initialValues: {
      fullName: userInfo.fullName,
      lookingForAJob: userInfo.lookingForAJob,
      lookingForAJobDescription: userInfo.lookingForAJobDescription,
      aboutMe: userInfo.aboutMe,
      contacts: {
        facebook: userInfo.contacts.facebook,
        vk: userInfo.contacts.vk,
        github: userInfo.contacts.github,
        instagram: userInfo.contacts.instagram,
        youtube: userInfo.contacts.youtube,
        website: userInfo.contacts.website,
        mainLink: userInfo.contacts.mainLink,
        twitter: userInfo.contacts.twitter
      }
    },
    onSubmit: values => {
      updateProfile(values)
    },
  })
  const editProfileInfoHandler = () => {
    isEdit(false)
  }

  const mappedContacts = Object.entries(userInfo.contacts).map((item, index) => {
    const name = item[0]
    return (
      <div key={index}>
        <label htmlFor={`contacts.${name}`}>{name}</label>
        <input
          placeholder={`your ${name}`}
          id={`contacts.${name}`}
          type={'text'}
          {...formik.getFieldProps(`contacts.${name}`)}
        />
      </div>)
  })

  return (
    <>
      <form className={style.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="fullName">Your Name</label>
        <input
          id={'fullName'}
          type={'text'}
          {...formik.getFieldProps('fullName')}
        />
        <label htmlFor="aboutMe">About Me</label>
        <textarea
          id={'aboutMe'}
          {...formik.getFieldProps('aboutMe')}
        />
        <label htmlFor="lookingForAJob">Looking for a job</label>
        <input
          id={'lookingForAJob'}
          checked={formik.values.lookingForAJob}
          type={'checkbox'}
          {...formik.getFieldProps('lookingForAJob')}
        />
        <label htmlFor="lookingForAJobDescription">Skills</label>
        <textarea
          id={'lookingForAJobDescription'}
          {...formik.getFieldProps('lookingForAJobDescription')}
        />
        <span>Contacts</span>
        {mappedContacts}

        <button type="submit">Save and exit</button>
      </form>
      <button onClick={editProfileInfoHandler}>Exit</button>
    </>
  )
}
