import {addPostAC, changePostTextAC, ProfilePageType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type DataPropsType = {
  state: ProfilePageType
}

type CallBacksPropsType = {
  sendPost: () => void
  changePost: (text: string) => void
}

const data = (state: StateType): DataPropsType  => {
  return {
    state: state.profilePage
  }
}

const callBacks = (dispatch: Dispatch): CallBacksPropsType => {
  return {
    sendPost: () => dispatch(addPostAC()),
    changePost: (text: string) => dispatch(changePostTextAC(text))
  }
}

const MyPostsContainer = connect(data, callBacks)(MyPosts)

export default MyPostsContainer;