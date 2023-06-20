import React, {useRef} from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
  posts: PostType[]
  addPostFn: (postValue: string) => void
}

function MyPosts(props: MyPostsPropsType) {

  let post = useRef<HTMLTextAreaElement>(null)

  const mappedPosts = props.posts.map((item: PostType) => {
    return (
      <Post message={item.message} likes={item.likes}/>
    )
  })

  const onClickSendPostHandler = () => {
    if (post.current?.value) {
      props.addPostFn(post.current.value)
      post.current.value = ''
    }
  }

  return (
    <div className={style.myPosts}>
      <div className={style.myPosts__title}>My posts</div>
      <div className={`${style.sendForm} ${style.myPosts__sendForm}`}>
        <textarea ref={post} className={style.sendForm__area}></textarea>
        <button onClick={onClickSendPostHandler} className={style.sendForm__btn}>Send it</button>
      </div>
      <div className={style.myPosts__published}>
        {mappedPosts}
      </div>
    </div>
  )
}

export default MyPosts;