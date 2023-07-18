import style from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import avatar from "../Dialogs/DialogItem/avatar1.png";
import axios from "axios";


export const Users = (props: UsersPropsType) => {

  const getUsers = () => {
    if (props.state.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => props.setUsers(response.data.items))
        .catch(error => alert(error + '\nusers request was failed'))
    }
  }

  console.log(props.state.users)

  return (
    <>
      <button className={style.buttonUsers} type={"button"} onClick={getUsers}>GET USERS</button>
      <div className={style.users}>
        {props.state.users.map(item => {

          const buttonClassName = item.followed ? `${style.button} ${style.followed}` : `${style.button}`

          const onClickHandler = () => {
            if (item.followed) {
              props.unfollow(item.id)
            } else {
              props.follow(item.id)
            }
          }

          return (
            <div key={item.id} className={style.userContent}>
              <div className={style.avatarAndFollow}>
                <img className={style.photo} src={avatar} alt="photo"/>
                <button
                  onClick={onClickHandler}
                  className={buttonClassName}>{item.followed ? 'Unfollow' : 'Follow'}
                </button>
              </div>
              <div className={style.userInfo}>
                <div className={style.nameAndLocation}>
                  <span className={style.name}>{item.name}</span>
                  <span className={style.location}>{'item.location.country'}, {'item.location.city'}</span>
                </div>
                <span className={style.status}>{item.status}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

const array = [
  {
    id: 1,
    photo: avatar,
    followed: true,
    name: 'Alex',
    status: "Ready to embrace new connections and create amazing memories! Life is too short not to meet new people.",
    location: {city: "Minsk", country: "Belarus"}
  },
  {
    id: 2,
    photo: avatar,
    followed: false,
    name: 'Igor',
    status: "Seeking kindred spirits and exciting opportunities! I believe that true friendships can enrich our lives in unimaginable ways.",
    location: {city: "Moscow", country: "Russia"}
  },
  {
    id: 3,
    photo: avatar,
    followed: false,
    name: 'Artem',
    status: "Open to new connections and meaningful bonds! Let's break the barriers of distance and explore the beauty of friendship.",
    location: {city: "Kiev", country: "Ukraine"}
  },
]
