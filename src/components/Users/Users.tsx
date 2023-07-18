import style from './Users.module.scss'
import {UsersPropsType} from "./UsersContainer";
import avatar from "../Dialogs/DialogItem/avatar1.png";
import axios from "axios";
import React from "react";

export class Users extends React.Component<UsersPropsType> { // принимает типизацию props и state
  constructor(props: UsersPropsType) {
    super(props)
  }

  componentDidMount() {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.countUsers}&page=${this.props.state.currentUsersPage}`
    )
      .then(response => this.props.setUsers(response.data.items))
      .catch(error => alert(error + '\nusers request was failed'))
  }

  changeCurrentPage = (page: number) => {
    this.props.setCurrentPage(page)

    axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.countUsers}&page=${page}`
    )
      .then(response => this.props.setUsers(response.data.items))
      .catch(error => alert(error + '\nusers request was failed'))
  }
  render = () => {

    const pagesCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.countUsers)

    const pagesArray = Array.from({length: pagesCount}, (_, index) => index + 1)

    return (
      <div className={style.users}>
        <div className={style.pages}>
          {pagesArray.map(item =>
            <span
              key={item}
              className={this.props.state.currentUsersPage === item ? `${style.page} ${style.currentPage}` : style.page}
              onClick={() => this.changeCurrentPage(item)}
            >{item}
          </span>)}
        </div>
        <div className={style.usersList}>
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
      </div>
    )
  }
}