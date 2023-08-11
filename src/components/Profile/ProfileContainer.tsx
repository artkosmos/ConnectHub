import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import React from "react";
import {getProfileStatusTC, getProfileTC, ProfilePageType, updateProfileStatusTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ResponseProfileType} from "../../API/social-network-api";
import {compose} from "redux";
import {withRedirect} from "../../utils/redirectHOC";
import Profile from "./Profile";



class ProfileContainer extends React.Component<CommonPropsType, ProfilePageType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '29283'
    }
    this.props.getProfileTC(userId)
    this.props.getProfileStatusTC(userId)
  }

  render = () => withRedirect(<Profile {...this.props}/>)
}

type PathParamsType = {
  userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type mapStateToPropsType = {
  userProfile: ResponseProfileType
  preloader: boolean
  isAuth: boolean
  status: string
}

type mapDispatchToProps = {
  getProfileTC: (userId: string) => void
  getProfileStatusTC: (userId: string) => void
  updateProfileStatusTC: (status: string) => void
}

export type ProfilePropsType = mapDispatchToProps & mapStateToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
  userProfile: state.profilePage.userProfile,
  preloader: state.profilePage.preloader,
  isAuth: state.auth.isLogIn,
  status: state.profilePage.status
})

const actionCreators = {
  getProfileTC,
  getProfileStatusTC,
  updateProfileStatusTC
}

export default compose<any>(
  connect (mapStateToProps, actionCreators),
  withRouter
)(ProfileContainer)
