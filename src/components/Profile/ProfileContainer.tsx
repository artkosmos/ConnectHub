import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import React from "react";
import {getProfileTC, ProfilePageType} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {ResponseProfileType} from "../../API/social-network-api";


class ProfileContainer extends React.Component<CommonPropsType, ProfilePageType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '29283'
    }
    this.props.getProfileTC(userId)
  }

  render = () => {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>
    }
   return (
     <Profile {...this.props}/>
   )
 }
}

type PathParamsType = {
  userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type mapStateToPropsType = {
  userProfile: ResponseProfileType
  preloader: boolean
  isAuth: boolean
}

type mapDispatchToProps = {
  getProfileTC: (userId: string) => void
}

export type ProfilePropsType = mapDispatchToProps & mapStateToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
  userProfile: state.profilePage.userProfile,
  preloader: state.profilePage.preloader,
  isAuth: state.auth.isLogIn
})

const actionCreators = {
  getProfileTC
}

const RouterProfileContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps, actionCreators)(RouterProfileContainer)
