import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import React from "react";
import {ProfilePageType, setProfilePreloader, setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {socialNetworkApi} from "../../API/social-network-api";


class ProfileContainer extends React.Component<CommonPropsType, ProfilePageType> {

  componentDidMount() {
    this.props.setProfilePreloader(true)
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '29283'
    }
    socialNetworkApi.getProfile(userId)
      .then(data => this.props.setUserProfile(data))
      .finally(() => this.props.setProfilePreloader(false))
  }

  render = () => {
   return (
     <Profile {...this.props}/>
   )
 }
}

type ResponseProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  aboutMe: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string | null
    large: string | null
  }
}

type PathParamsType = {
  userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type mapStateToPropsType = {
  userProfile: ResponseProfileType
  preloader: boolean
}

type mapDispatchToProps = {
  setUserProfile: (profile: ResponseProfileType) => void
  setProfilePreloader: (value: boolean) => void
}

export type ProfilePropsType = mapDispatchToProps & mapStateToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
  userProfile: state.profilePage.userProfile,
  preloader: state.profilePage.preloader
})

const actionCreators = {
  setUserProfile,
  setProfilePreloader
}

const RouterProfileContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps, actionCreators)(RouterProfileContainer)
