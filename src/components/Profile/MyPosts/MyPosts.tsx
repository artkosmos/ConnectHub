import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className={s.my_posts}>
      <div className={s.my_posts__title}>My posts</div>
      <div className={`${s.my_posts__send} ${s.send_post}`}>
        <div className={s.send_post__area}></div>
        <button className={s.send_post__btn}>Send it</button>
      </div>
      <div className={s.my_posts__published}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
)
}

export default MyPosts;