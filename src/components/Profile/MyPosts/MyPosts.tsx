import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div className={style.myPosts}>
      <div className={style.myPosts__title}>My posts</div>
      <div className={`${style.sendForm} ${style.myPosts__sendForm}`}>
        <div className={style.sendForm__area}></div>
        <button className={style.sendForm__btn}>Send it</button>
      </div>
      <div className={style.myPosts__published}>
        <Post message="Hey, how are you today?" likes={0} />
        <Post message="The weather is sunny. Who want to go walking?" likes={4} />
        <Post message="Let's meet the people)" likes={13} />
        <Post message="That's my first post here!" likes={6} />
      </div>
    </div>
)
}

export default MyPosts;