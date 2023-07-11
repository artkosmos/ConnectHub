import {Users} from "./Users";
import {StateType} from "../../redux/redux-store";
import {
  followUserAC,
  setUsersAC,
  unfollowUserAC, UsersPageType,
  UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type mapStateToPropsType = {
  state: UsersPageType
}

type mapDispatchToPropsType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (users: UserType[]) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType  => {
  return {
    state: state.usersPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType  => {
  return {
    follow: (userID: number) => dispatch(followUserAC(userID)),
    unfollow: (userID: number) => dispatch(unfollowUserAC(userID)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
  }
}




const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer

