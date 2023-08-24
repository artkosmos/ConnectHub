import {StateType} from "../../redux/redux-store";
import {
  AppUserType,
  followTC, getUsersTC,
  setCurrentPage,
  setPreloader,
  setUsers,
  unfollowTC,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {
  getCurrentUsersPage, getFollowingInProgress, getTotalUsersCount, getUsers,
  getUsersCountToDisplay,
  getUsersPagePreloader,
  isAuthorized
} from "../../selectors/selectors";

export class UsersAPI extends React.Component<UsersPropsType> { // принимает типизацию props и state
  constructor(props: UsersPropsType) {
    super(props)
  }

  componentDidMount() {
    this.props.getUsersTC(this.props.countUsers, this.props.currentUsersPage)
  }

  changeCurrentPage = (page: number) => {
    this.props.setCurrentPage(page)
    this.props.getUsersTC(this.props.countUsers, page)

  }
  render = () => {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>
    }
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.countUsers)
    const pages = Array.from({length: pagesCount}, (_, index) => index + 1)
    return (
      <Users
        preloader={this.props.preloader}
        pages={pages}
        currentUsersPage={this.props.currentUsersPage}
        changeCurrentPage={this.changeCurrentPage}
        users={this.props.users}
        followingInProgress={this.props.followingInProgress}
        follow={this.props.followTC}
        unfollow={this.props.unfollowTC}
      />
    )
  }
}

type MapStateToPropsType = {
  isAuth: boolean
  countUsers: number
  currentUsersPage: number
  preloader: boolean
  totalUsersCount: number
  followingInProgress: number[]
  users: AppUserType[]
}

type MapDispatchToPropsType = {
  setUsers: (users: AppUserType[]) => void
  setCurrentPage: (page: number) => void
  setPreloader: (value: boolean) => void
  followTC: (userId: number) => void
  unfollowTC: (userId: number) => void
  getUsersTC: (count: number, page: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    countUsers: getUsersCountToDisplay(state),
    currentUsersPage: getCurrentUsersPage(state),
    preloader: getUsersPagePreloader(state),
    totalUsersCount: getTotalUsersCount(state),
    users: getUsers(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: isAuthorized(state)
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

export default compose<any>(
  connect(mapStateToProps, actionCreators)
)(UsersAPI)

