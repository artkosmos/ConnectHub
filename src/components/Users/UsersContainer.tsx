import {StateType} from "../../redux/redux-store";
import {
  followTC, getUsersTC,
  setCurrentPage,
  setPreloader,
  setUsers,
  unfollowTC,
  UsersPageType,
  UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Redirect} from "react-router-dom";

export class UsersAPI extends React.Component<UsersPropsType> { // принимает типизацию props и state
  constructor(props: UsersPropsType) {
    super(props)
  }

  componentDidMount() {
    this.props.getUsersTC(this.props.state.countUsers, this.props.state.currentUsersPage)
  }

  changeCurrentPage = (page: number) => {
    this.props.setCurrentPage(page)
    this.props.getUsersTC(this.props.state.countUsers, page)

  }
  render = () => {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>
    }
    const pagesCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.countUsers)
    const pages = Array.from({length: pagesCount}, (_, index) => index + 1)
    return (
      <Users
        preloader={this.props.state.preloader}
        pages={pages}
        currentUsersPage={this.props.state.currentUsersPage}
        changeCurrentPage={this.changeCurrentPage}
        users={this.props.state.users}
        followingInProgress={this.props.state.followingInProgress}
        follow={this.props.followTC}
        unfollow={this.props.unfollowTC}
      />
    )
  }
}

type mapStateToPropsType = {
  state: UsersPageType
  isAuth: boolean
}

type mapDispatchToPropsType = {
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setPreloader: (value: boolean) => void
  followTC: (userId: number) => void
  unfollowTC: (userId: number) => void
  getUsersTC: (count: number, page: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    state: state.usersPage,
    isAuth: state.auth.isLogIn
  }
}

// connect автоматически принимает dispatch, обворачивает свойства в callback и диспатчит AC с переданным значением
// вместо setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
const actionCreators = {
  setUsers,
  setCurrentPage,
  setPreloader,
  followTC,
  unfollowTC,
  getUsersTC
}

const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPI)

export default UsersContainer

