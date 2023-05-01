import React from "react";
import style from "./Post.module.scss"
import avatar from "./avatar1.png"

type PostPropsType = {
  message: string
  likes: number
}

function Post(props: PostPropsType) {
  return (
    <div className={style.post}>
      <div className={style.post__avatarAndMessage}>
        <img src={avatar} alt="avatar"/>
        <p>{props.message}</p>
      </div>
      <div className={style.post__likes}>{props.likes} likes</div>
      <div></div>
    </div>
  )
}

export default Post;