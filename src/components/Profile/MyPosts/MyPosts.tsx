import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {SendPostForm} from "../../SendPostForm/SendPostForm";
import {MyPostsPropsType} from "./MyPostsContainer";



function MyPosts(props: MyPostsPropsType) {

  const mappedPosts = props.posts.map((item: PostType) => {
    return (
      <Post key={item.id} message={item.message} likes={item.likes}/>
    )
  })

  const onClickSendPostHandler = (message: string) => {
    props.addPost(message)
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