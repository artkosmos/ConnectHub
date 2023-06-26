import {ChangeEvent} from "react";
import style from "./MyPosts.module.scss"
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../redux/state";
import {addPostAC, changePostTextAC} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
  posts: PostType[]
  dispatch: (action: ActionType) => void
  postValue: string
}

function MyPosts(props: MyPostsPropsType) {

  // let post = useRef<HTMLTextAreaElement>(null)

  const mappedPosts = props.posts.map((item: PostType) => {
    return (
      <Post message={item.message} likes={item.likes}/>
    )
  })

  const onClickSendPostHandler = () => {
    // if (post.current?.value) {
    //   props.dispatch(addPostAC())
    // }
    props.dispatch(addPostAC())
  }

  const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changePostTextAC(event.currentTarget.value))
  }

  return (
    <div className={style.myPosts}>
      <div className={style.myPosts__title}>My posts</div>
      <div className={`${style.sendForm} ${style.myPosts__sendForm}`}>
        <textarea value={props.postValue} onChange={onChangeTextHandler} className={style.sendForm__area}></textarea>
        <button onClick={onClickSendPostHandler} className={style.sendForm__btn}>Send it</button>
      </div>
      <div className={style.myPosts__published}>
        {mappedPosts}
      </div>
    </div>
  )
}

export default MyPosts;