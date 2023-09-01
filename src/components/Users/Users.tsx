import style from "./Users.module.scss";
import avatar from "../Dialogs/DialogItem/avatar1.png";
import React from "react";
import {Preloader} from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {AppUserType} from "../../redux/users-reducer";
import {Pagination, Paper} from "@mui/material";
import Button from "@mui/material/Button";

type UsersPropsType = {
  pages: number
  currentUsersPage: number
  changeCurrentPage: (page: number) => void
  users: AppUserType[]
  preloader: boolean
  followingInProgress: number[]
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    props.changeCurrentPage(page)
  }

  return (
    <div className={style.users}>
      <div className={style.pages}>
        <Pagination
          count={props.pages}
          variant="outlined"
          shape="rounded"
          color={"primary"}
          onChange={paginationHandler}
          boundaryCount={3}
        />
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
                  <Button
                    className={buttonClassName}
                    disabled={props.followingInProgress.includes(item.id)}
                    onClick={onClickHandler}
                    variant={item.followed ? 'outlined' : 'contained'}>
                    {item.followed ? 'Unfollow' : 'Follow'}
                  </Button>
                </div>
                <Paper
                  className={style.userInfo}
                  elevation={8}
                >
                  <span className={style.name}>{item.name}</span>
                  <span className={style.status}>{item.status}</span>
                </Paper>
              </div>
            )
          })}
        </div>}
    </div>
  )
}

