import {addPost, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {getProfilePosts} from "../../../selectors/selectors";

type MapStateToPropsType = {
  posts:  PostType[]
}

type MapDispatchToPropsType = {
  addPost: (message: string) => void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType  => {
  return {
    posts: getProfilePosts(state)
  }
}

const actionCreators = {
  addPost
}

const MyPostsContainer = connect(mapStateToProps, actionCreators)(MyPosts)

export default MyPostsContainer;