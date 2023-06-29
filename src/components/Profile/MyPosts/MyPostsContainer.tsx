import {addPostAC, changePostTextAC, ProfilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type DataMyPostsPropsType = {
  state: ProfilePageType
}

export type CallBacksMyPostsPropsType = {
  sendPost: () => void
  changePost: (text: string) => void
}

const data = (state: StateType): DataMyPostsPropsType  => {
  return {
    state: state.profilePage
  }
}

const callBacks = (dispatch: Dispatch): CallBacksMyPostsPropsType => {
  return {
    sendPost: () => dispatch(addPostAC()),
    changePost: (text: string) => dispatch(changePostTextAC(text))
  }
}

const MyPostsContainer = connect(data, callBacks)(MyPosts)

export default MyPostsContainer;