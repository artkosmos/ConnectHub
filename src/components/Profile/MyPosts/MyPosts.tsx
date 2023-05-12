import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";

function MyPosts() {

  const posts = [
    {id: 1, message: 'Hey, how are you today?', likes: 0},
    {id: 1, message: 'The weather is sunny. Who want to go walking?', likes: 4},
    {id: 1, message: 'Let\'s meet the people)', likes: 13},
    {id: 1, message: 'That\'s my first post here!', likes: 6}
  ]

  const mappedPosts = posts.map((item) => {
    return (
      <Post message={item.message} likes={item.likes}/>
    )
  })


  return (
    <div className={style.myPosts}>
      <div className={style.myPosts__title}>My posts</div>
      <div className={`${style.sendForm} ${style.myPosts__sendForm}`}>
        <div className={style.sendForm__area}></div>
        <button className={style.sendForm__btn}>Send it</button>
      </div>
      <div className={style.myPosts__published}>
        {mappedPosts}
      </div>
    </div>
  )
}

export default MyPosts;