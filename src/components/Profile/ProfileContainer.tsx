import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import React from "react";
import {ProfilePageType, setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<CommonPropsType, ProfilePageType> {

  componentDidMount() {
    const userId = this.props.match.params.userId
    axios.get<null, AxiosResponse<ResponseProfileType>, {userId: number}>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
      .catch(error => console.warn(error))
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
}

type mapDispatchToProps = {
  setUserProfile: (profile: ResponseProfileType) => void
}

export type ProfilePropsType = mapDispatchToProps & mapStateToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
  userProfile: state.profilePage.userProfile
})

const actionCreators = {
  setUserProfile
}

const RouterProfileContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps, actionCreators)(RouterProfileContainer)
