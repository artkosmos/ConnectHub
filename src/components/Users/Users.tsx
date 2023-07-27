import style from "./Users.module.scss";
import avatar from "../Dialogs/DialogItem/avatar1.png";
import React from "react";
import {UserType} from "../../redux/users-reducer";
import {Preloader} from "../Preloader/Preloader";

type UsersPropsType = {
  pages: number[]
  currentUsersPage: number
  changeCurrentPage: (page: number) => void
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  users: UserType[]
  preloader: boolean
}

export const Users = (props: UsersPropsType) => {
  return (
    <div className={style.users}>
      <div className={style.pages}>
        {props.pages.map(item =>
          <span
            key={item}
            className={props.currentUsersPage === item ? `${style.page} ${style.currentPage}` : style.page}
            onClick={() => props.changeCurrentPage(item)}
          >{item}
          </span>)}
      </div>
      <Preloader preloader={props.preloader}/>
      <div className={style.usersList}>
        {props.users.map(item => {

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
                  <span className={style.location}>{'country'}, {'city'}</span>
                </div>
                <span className={style.status}>{item.status}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

