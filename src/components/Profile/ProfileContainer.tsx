import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import React from "react";
import {
  getProfileStatusTC,
  getProfileTC,
  ProfilePageType, setError, updateProfileInfoTC,
  updateProfilePhotoTC,
  updateProfileStatusTC
} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileInfoType} from "../../API/social-network-api";
import {compose} from "redux";
import {withRedirect} from "../../utils/redirectHOC";
import Profile from "./Profile";
import {
  getAuthUserId, getProfileError,
  getProfilePreloader,
  getProfileStatus,
  getUserProfile,
  isAuthorized
} from "../../selectors/selectors";

class ProfileContainer extends React.Component<CommonPropsType, ProfilePageType> {

  componentDidMount() {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>
    }

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
  userProfile: ProfileInfoType | null
  preloader: boolean
  isAuth: boolean
  status: string
  userId: number | undefined
  error: string | null
}

type MapDispatchToProps = {
  getProfileTC: (userId: string) => void
  getProfileStatusTC: (userId: string) => void
  updateProfileStatusTC: (status: string) => void
  updateProfilePhotoTC: (photo: File) => void
  updateProfileInfoTC: (profile: any) => void
  setError: (error: string | null) => void
}

export type ProfilePropsType = MapDispatchToProps & MapStateToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  userProfile: getUserProfile(state),
  preloader: getProfilePreloader(state),
  isAuth: isAuthorized(state),
  status: getProfileStatus(state),
  userId: getAuthUserId(state),
  error: getProfileError(state),
})

const actionCreators = {
  getProfileTC,
  getProfileStatusTC,
  updateProfileStatusTC,
  updateProfilePhotoTC,
  updateProfileInfoTC,
  setError
}

export default compose<any>(
  connect (mapStateToProps, actionCreators),
  withRouter
)(ProfileContainer)
