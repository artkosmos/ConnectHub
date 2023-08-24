import React from "react"
import style from './Login.module.scss'
import {LoginForm, LoginFormSubmitType} from "./LoginForm";
import {connect} from "react-redux";
import {logInTC} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {getAuthError, isAuthorized} from "../../selectors/selectors";


function LoginContainer(props: LoginFormPropsType) {
  return (
    <div className={style.loginContent}>
      <h3 className={style.title}>You're not in the system. Please log in</h3>
      {props.authError && <span className={style.authError}>{props.authError}</span>}
      <LoginForm {...props}/>
    </div>
  )
}

type MapStateToPropsType = {
  isAuth: boolean
  authError: null | string
}

type MapDispatchToPropsType = {
  logInTC: (data: LoginFormSubmitType) => void
}

export type LoginFormPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps= (state: StateType): MapStateToPropsType => ({
  isAuth: isAuthorized(state),
  authError: getAuthError(state)
})

const actionCreators = {
  logInTC
}

export default connect(mapStateToProps, actionCreators)(LoginContainer)
