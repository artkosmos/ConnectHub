import {StateType} from "../../redux/redux-store";
import {
  followUserAC, setCurrentPageAC,
  setUsersAC,
  unfollowUserAC, UsersPageType,
  UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export class UsersAPI extends React.Component<UsersPropsType> { // принимает типизацию props и state
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
    const pages = Array.from({length: pagesCount}, (_, index) => index + 1)
    return (
      <Users
        pages={pages}
        currentUsersPage={this.props.state.currentUsersPage}
        changeCurrentPage={this.changeCurrentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.state.users}
      />
    )
  }
}

type mapStateToPropsType = {
  state: UsersPageType
}

type mapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType  => {
  return {
    state: state.usersPage,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType  => {
  return {
    follow: (userID: number) => dispatch(followUserAC(userID)),
    unfollow: (userID: number) => dispatch(unfollowUserAC(userID)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer

