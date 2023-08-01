import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {StateType} from "../../redux/redux-store";
import {AuthStateType, setLoginUser} from "../../redux/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component<HeaderPropsType, AuthStateType> {
  
  componentDidMount() {
    axios.get<ResponseAuthType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data
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