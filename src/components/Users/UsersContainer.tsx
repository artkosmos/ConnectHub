import {StateType} from "../../redux/redux-store";
import {
  followUser, removeDisableButton, setCurrentPage, setDisableButton, setPreloader,
  setUsers,
  unfollowUser, UsersPageType,
  UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import {socialNetworkApi} from "../../API/social-network-api";

export class UsersAPI extends React.Component<UsersPropsType> { // принимает типизацию props и state
  constructor(props: UsersPropsType) {
    super(props)
  }

  componentDidMount() {
    socialNetworkApi.getUsers(this.props.state.countUsers, this.props.state.currentUsersPage)
      .then(data => this.props.setUsers(data))
  }

  changeCurrentPage = (page: number) => {
    this.props.setCurrentPage(page)
    this.props.setPreloader(true)

    socialNetworkApi.getUsers(this.props.state.countUsers, page)
      .then(data => this.props.setUsers(data))
      .finally(() => this.props.setPreloader(false))
  }
  render = () => {
    const pagesCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.countUsers)
    const pages = Array.from({length: pagesCount}, (_, index) => index + 1)
    return (
      <Users
        preloader={this.props.state.preloader}
        pages={pages}
        currentUsersPage={this.props.state.currentUsersPage}
        changeCurrentPage={this.changeCurrentPage}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        users={this.props.state.users}
        followingInProgress={this.props.state.followingInProgress}
        setDisableButton={this.props.setDisableButton}
        removeDisableButton={this.props.removeDisableButton}
      />
    )
  }
}

type mapStateToPropsType = {
  state: UsersPageType
}

type mapDispatchToPropsType = {
  followUser: (userID: number) => void
  unfollowUser: (userID: number) => void
  setUsers: (users: UserType[]) => void
  setCurrentPage: (page: number) => void
  setPreloader: (value: boolean) => void
  setDisableButton: (userId: number) => void
  removeDisableButton: (userId: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => {
  return {
    state: state.usersPage,
  }
}

// connect автоматически принимает dispatch, обворачивает свойства в callback и диспатчит AC с переданным значением
// вместо setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
const actionCreators = {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setPreloader,
  removeDisableButton,
  setDisableButton
}

const UsersContainer = connect(mapStateToProps, actionCreators)(UsersAPI)

export default UsersContainer

