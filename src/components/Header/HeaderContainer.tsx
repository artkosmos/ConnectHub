import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {StateType} from "../../redux/redux-store";
import {AuthStateType, checkAuthTC, logOutTC} from "../../redux/auth-reducer";
import {compose} from "redux";
import {getAuthUserLogin, isAuthorized} from "../../selectors/selectors";

class HeaderContainer extends React.Component<HeaderPropsType, AuthStateType> {

  render() {
    return <Header {...this.props}/>
  }
}

type MapStateToPropsType = {
  login: string | undefined
  isAuth: boolean
}

type MapDispatchToPropsType = {
  checkAuthTC: () => void
  logOutTC: () => void
}

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  login: getAuthUserLogin(state),
  isAuth: isAuthorized(state)
})

const actionCreators = {
  checkAuthTC,
  logOutTC
}

export default compose<any>(
  connect (mapStateToProps, actionCreators)
)(HeaderContainer)
