import style from "./Users.module.scss";
import avatar from "../Dialogs/DialogItem/avatar1.png";
import React from "react";
import {Preloader} from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {AppUserType} from "../../redux/users-reducer";

type UsersPropsType = {
  pages: number[]
  currentUsersPage: number
  changeCurrentPage: (page: number) => void
  users: AppUserType[]
  preloader: boolean
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
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
      {props.preloader
        ? <Preloader/>
        : <div className={style.usersList}>
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
                  <NavLink to={`/profile/${item.id}`}>
                    <img className={style.photo} src={item.photos.large ? item.photos.large : avatar} alt="photo"/>
                  </NavLink>
                  <button
                    disabled={props.followingInProgress.includes(item.id)}
                    onClick={onClickHandler}
                    className={buttonClassName}>{item.followed ? 'Unfollow' : 'Follow'}
                  </button>
                </div>
                <div className={style.userInfo}>
                  <div className={style.nameAndLocation}>
                    <span className={style.name}>{item.name}</span>
                    <span className={style.location}>{item.location.country}</span>
                  </div>
                  <span className={style.status}>{item.status}</span>
                </div>
              </div>
            )
          })}
        </div>}
    </div>
  )
}

