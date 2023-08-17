import React from 'react';
import {useFormik} from 'formik';
import style from './SendPostForm.module.scss'

type ErrorsType = {
  post?: string
}

type SendPostFormType = {
  callBack: (message: string) => void
}

export const SendPostForm = ({callBack}: SendPostFormType) => {
  const formik = useFormik({
    initialValues: {
      post: '',
    },
    validate: (values) => {
      const errors: ErrorsType = {}

      if (!values.post) {
        errors.post = 'Required';
      } else if (values.post.length < 10) {
        errors.post = 'Must be more than 10 characters';
      }

      return errors
    },
    onSubmit: values => {
      callBack(formik.values.post)
      formik.resetForm()
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={style.formWrapper}>
      <textarea
        className={style.textArea}
        id="post"
        {...formik.getFieldProps('post')}
      />
      {formik.errors.post ? <div className={style.error}>{formik.errors.post}</div> : null}

      <button className={style.sendButton} type="submit">Send post</button>
    </form>
  )
}
