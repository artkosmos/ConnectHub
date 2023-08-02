import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {StateType} from "../../redux/redux-store";
import {AuthStateType, checkAuthTC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<HeaderPropsType, AuthStateType> {
  
  componentDidMount() {
    this.props.checkAuthTC()
  }

  render() {
    return <Header {...this.props}/>
  }
}

type ResponseAuthType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: number
  messages: string[]
}

type mapStateToPropsType = {
  login: string | undefined
  isAuth: boolean
}

type mapDispatchToPropsType = {
  checkAuthTC: () => void
}

export type HeaderPropsType = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: StateType) => ({
  login: state.auth.login,
  isAuth: state.auth.isLogIn
})

const actionCreators = {
  checkAuthTC
}

export default connect (mapStateToProps, actionCreators)(HeaderContainer)