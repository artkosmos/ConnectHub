import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {StateType} from "../../redux/redux-store";
import {AuthStateType, setLoginUser} from "../../redux/auth-reducer";
import {socialNetworkApi} from "../../API/social-network-api";

class HeaderContainer extends React.Component<HeaderPropsType, AuthStateType> {
  
  componentDidMount() {
    socialNetworkApi.checkAuth()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, email, login} = data.data
          this.props.setLoginUser(id, email, login)
        }
      })
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
  setLoginUser: (userId: number, email: string, login: string) => void
}

export type HeaderPropsType = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: StateType) => ({
  login: state.auth.login,
  isAuth: state.auth.isLogIn
})

const actionCreators = {
  setLoginUser
}

export default connect (mapStateToProps, actionCreators)(HeaderContainer)