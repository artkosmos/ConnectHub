import React from "react"
import style from './Login.module.scss'
import {LoginForm, LoginFormSubmitType} from "./LoginForm";
import {connect} from "react-redux";
import {logInTC} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";



function Login(props: LoginFormPropsType) {
  return (
    <div>
      <h3 className={style.title}>You're not in the system. Please log in</h3>
      <LoginForm {...props}/>
    </div>
  )
}

type mapStateToPropsType = {
  isAuth: boolean
}

type mapDispatchToPropsType = {
  logInTC: (data: LoginFormSubmitType) => void
}

export type LoginFormPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps= (state: StateType) => ({
  isAuth: state.auth.isLogIn
})

const actionCreators = {
  logInTC
}

export default connect(mapStateToProps, actionCreators)(Login)
