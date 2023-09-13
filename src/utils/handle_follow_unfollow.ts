import {UsersPageType} from "../redux/users-reducer";

export const handleFollowUnfollow = (state: UsersPageType, userId: number, followed: boolean) => {
  return {...state, users: state.users.map(item => item.id === userId ? {...item, followed} : item)}
}