import style from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import avatar from "../Dialogs/DialogItem/avatar1.png";
import axios from "axios";
import React from "react";


export class Users extends React.Component<UsersPropsType> { // принимает типизацию props и state
  constructor(props: UsersPropsType) {
    super(props)
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => this.props.setUsers(response.data.items))
      .catch(error => alert(error + '\nusers request was failed'))
  }

  render = () => {
    return (
      <>
        <div className={style.users}>
          {this.props.state.users.map(item => {

            const buttonClassName = item.followed ? `${style.button} ${style.followed}` : `${style.button}`

            const onClickHandler = () => {
              if (item.followed) {
                this.props.unfollow(item.id)
              } else {
                this.props.follow(item.id)
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
}