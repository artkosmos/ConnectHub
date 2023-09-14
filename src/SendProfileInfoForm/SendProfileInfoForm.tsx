import React from 'react';
import {useFormik} from 'formik';
import style from './SendProfileInfoForm.module.scss'
import {ResponseProfileType} from "../API/social-network-api";

type SendProfileInfoFormProps = {
  callBack: (profile: any) => void
  userInfo: ResponseProfileType
}

export const SendProfileInfoForm = ({userInfo, callBack}: SendProfileInfoFormProps) => {
  const formik = useFormik({
    initialValues: {
      fullName: userInfo.fullName,
      lookingForAJob: userInfo.lookingForAJob,
      lookingForAJobDescription: userInfo.lookingForAJobDescription,
      aboutMe: userInfo.aboutMe
    },
    onSubmit: values => {
      console.log(values)
      callBack(values)
    },
  })

  return (
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
        type={'checkbox'}
        {...formik.getFieldProps('lookingForAJob')}
      />
      <label htmlFor="lookingForAJobDescription">Skills</label>
      <textarea
        id={'lookingForAJobDescription'}
        {...formik.getFieldProps('lookingForAJobDescription')}
      />

      <button type="submit">Save and exit</button>
    </form>
  )
}
