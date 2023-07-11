import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redux/redux-store";
import {
  followUserAC,
  setUsersAC,
  unfollowUserAC,
  UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";

export type mapStateToPropsTypeUsers = {
  users: UserType[]
}

export type mapDispatchToPropsTypeUsers = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: StateType): mapStateToPropsTypeUsers  => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTypeUsers  => {
  return {
    follow: (userID: number) => dispatch(followUserAC(userID)),
    unfollow: (userID: number) => dispatch(unfollowUserAC(userID)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
  }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

