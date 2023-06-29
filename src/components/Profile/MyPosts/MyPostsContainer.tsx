import {addPostAC, changePostTextAC} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
}

function MyPostsContainer(props: MyPostsContainerPropsType) {

  const state = props.store.getState().profilePage
  console.log(state)

  const onClickSendPostHandler = () => {
    props.store.dispatch(addPostAC())
  }

  const onChangeTextHandler = (text: string) => {
    props.store.dispatch(changePostTextAC(text))
  }

  return (
    <MyPosts
      posts={state.posts}
      sendPost={onClickSendPostHandler}
      changePost={onChangeTextHandler}
      postValue={state.newPost}
    />
  )
}

export default MyPostsContainer;