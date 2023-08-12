import React from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {CallBacksMyPostsPropsType, DataMyPostsPropsType} from "./MyPostsContainer";
import {Field, Form} from "react-final-form";

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
      <Form
        onSubmit={(data: { postMessage: string }) => onClickSendPostHandler(data.postMessage)}
        render={({handleSubmit}) => (
          <form onSubmit={handleSubmit} className={style.formWrapper}>
            <Field className={style.textArea} name="postMessage" component={'textarea'}
                   placeholder={'Type message...'}/>
            <button className={style.sendButton} type="submit">Send message</button>
          </form>
        )}
      />
      <div className={style.myPosts__published}>
        {mappedPosts}
      </div>
    </div>
  )
}

export default MyPosts;