import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {CallBacksMyPostsPropsType, DataMyPostsPropsType} from "./MyPostsContainer";
import {SendPostForm} from "../../SendPostForm/SendPostForm";

type MyPostsPropsType = DataMyPostsPropsType & CallBacksMyPostsPropsType

function MyPosts(props: MyPostsPropsType) {

  const mappedPosts = props.state.posts.map((item: PostType) => {
    return (
      <Post key={item.id} message={item.message} likes={item.likes}/>
    )
  })

  const onClickSendPostHandler = (message: string) => {
    props.sendPost(message)
  }

  return (
    <div className={style.myPosts}>
      <div className={style.title}>My posts 📝</div>
      <SendPostForm callBack={onClickSendPostHandler}/>
      <div className={style.myPosts__published}>
        {mappedPosts}
      </div>
    </div>
  )
}

export default MyPosts;