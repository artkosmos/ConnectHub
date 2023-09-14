import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import React from "react";
import {
  getProfileStatusTC,
  getProfileTC,
  ProfilePageType, updateProfileInfoTC,
  updateProfilePhotoTC,
  updateProfileStatusTC
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ResponseProfileType} from "../../API/social-network-api";
import {compose} from "redux";
import {withRedirect} from "../../utils/redirectHOC";
import Profile from "./Profile";
import {
  getAuthUserId,
  getProfilePreloader,
  getProfileStatus,
  getUserProfile,
  isAuthorized
} from "../../selectors/selectors";

class ProfileContainer extends React.Component<CommonPropsType, ProfilePageType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = `${this.props.userId}`
    }
    this.props.getProfileTC(userId)
    this.props.getProfileStatusTC(userId)
  }

  render = () => withRedirect(<Profile {...this.props} isMyPage={!this.props.match.params.userId}/>)
}

type PathParamsType = {
  userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type MapStateToPropsType = {
  userProfile: ResponseProfileType | null
  preloader: boolean
  isAuth: boolean
  status: string
  userId: number | undefined
}

type MapDispatchToProps = {
  getProfileTC: (userId: string) => void
  getProfileStatusTC: (userId: string) => void
  updateProfileStatusTC: (status: string) => void
  updateProfilePhotoTC: (photo: File) => void
  updateProfileInfoTC: (profile: any) => void
  isMyPage: boolean
}

export type ProfilePropsType = MapDispatchToProps & MapStateToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  userProfile: getUserProfile(state),
  preloader: getProfilePreloader(state),
  isAuth: isAuthorized(state),
  status: getProfileStatus(state),
  userId: getAuthUserId(state),
})

const actionCreators = {
  getProfileTC,
  getProfileStatusTC,
  updateProfileStatusTC,
  updateProfilePhotoTC,
  updateProfileInfoTC
}

export default compose<any>(
  connect (mapStateToProps, actionCreators),
  withRouter
)(ProfileContainer)
