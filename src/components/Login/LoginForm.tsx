import React from "react";
import style from './LoginForm.module.scss'
import {useFormik} from "formik";
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {LoginFormPropsType} from "./Login";
import {Redirect} from "react-router-dom";

type ValidateFieldType = {
  email?: string
  password?: string
}

export type LoginFormSubmitType = {
  email: string
  password: string
  rememberMe: boolean
}

export function LoginForm(props: LoginFormPropsType) {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    onSubmit: values => {
      props.logInTC(values)
      formik.resetForm()
    },
    validate: (values => {
      const errors: ValidateFieldType = {}
      const checkEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const checkPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*[\s.,;:!])[a-zA-Z0-9@#$%^&*]{8,}$/i

      if (!values.email) {
        errors.email = 'Required'
      } else if (!checkEmail.test(values.email)) {
        errors.email = 'Invalid email address'
      }

      if (!values.password) {
        errors.password = 'Required'
      } else if (!checkPassword.test(values.password)) {
        errors.password = 'Invalid password'
      }

      return errors
    })
  })

  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
  <Grid container justifyContent={'center'}>
    <Grid item justifyContent={'center'}>
      <FormControl>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <TextField
              label="Email"
              margin="normal"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ?
              <div className={style.error}>{formik.errors.email}</div> : null}
            <TextField
              type="password"
              label="Password"
              margin="normal"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.email && formik.errors.password ?
              <div className={style.error}>{formik.errors.password}</div> : null}
            <div className={style.password}>Password must contain capital and usual letters, symbols and be more than 8
              characters
            </div>
            <FormControlLabel
              label={'Remember me'}
              control={<Checkbox/>}
              checked={formik.values.rememberMe}
              {...formik.getFieldProps('rememberMe')}
            />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Login
            </Button>
          </FormGroup>
        </form>
      </FormControl>
    </Grid>
  </Grid>
  )
}