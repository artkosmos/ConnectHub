import {addPostAC, ProfilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type DataMyPostsPropsType = {
  state: ProfilePageType
}

export type CallBacksMyPostsPropsType = {
  sendPost: (message: string) => void
}

const data = (state: StateType): DataMyPostsPropsType  => {
  return {
    state: state.profilePage
  }
}

const callBacks = (dispatch: Dispatch): CallBacksMyPostsPropsType => {
  return {
    sendPost: (message: string) => dispatch(addPostAC(message)),
  }
}

const MyPostsContainer = connect(data, callBacks)(MyPosts)

export default MyPostsContainer;