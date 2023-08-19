import React from "react"
import style from './Login.module.scss'
import {LoginForm, LoginFormSubmitType} from "./LoginForm";
import {connect} from "react-redux";
import {logInTC} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";


function Login(props: LoginFormPropsType) {
  return (
    <div className={style.loginContent}>
      <h3 className={style.title}>You're not in the system. Please log in</h3>
      {props.authError && <span className={style.authError}>{props.authError}</span>}
      <LoginForm {...props}/>
    </div>
  )
}

type mapStateToPropsType = {
  isAuth: boolean
  authError: null | string
}

type mapDispatchToPropsType = {
  logInTC: (data: LoginFormSubmitType) => void
}

export type LoginFormPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps= (state: StateType) => ({
  isAuth: state.auth.isLogIn,
  authError: state.auth.authError
})

const actionCreators = {
  logInTC
}

export default connect(mapStateToProps, actionCreators)(Login)
