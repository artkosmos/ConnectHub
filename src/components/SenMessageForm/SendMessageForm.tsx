import React from 'react';
import style from './SendMessageForm.module.scss'
import {useFormik} from "formik";
import Button from "@mui/material/Button";

type ErrorsType = {
  text?: string
}

type SendMessageFormType = {
  callBack: (message: string) => void
}

export const SendMessageForm = ({callBack}: SendMessageFormType) => {
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validate: (values) => {
      const errors: ErrorsType = {}

      if (!values.text) {
        errors.text = 'Required';
      }

      return errors
    },
    onSubmit: values => {
      callBack(formik.values.text)
      formik.resetForm()
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={style.formWrapper}>
      <textarea
        className={style.textArea}
        placeholder={'Write a message...'}
        id="text"
        {...formik.getFieldProps('text')}
      />
      {/*{formik.errors.text ? <div className={style.error}>{formik.errors.text}</div> : null}*/}
      <Button type={'submit'} className={style.button} size="small" variant="contained">Send</Button>
    </form>
  )
}
