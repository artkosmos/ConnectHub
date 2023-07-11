import avatar from '../components/Dialogs/DialogItem/avatar1.png'

type UsersPageType = {
  users: UserType[]
}

type UserType = {
  id: number
  photo: string
  followed: boolean
  name: string
  status: string
  location: {city: string, country: string}
}

type ActionType = FollowUserACType | UnfollowUserACType | SetUsersACType

const initialState: UsersPageType = {
  users: [
    { id: 1, photo: avatar, followed: true, name: 'Alex', status: "", location: { city: "Minsk", country: "Belarus" } },
    { id: 2, photo: avatar, followed: false, name: 'Igor', status: "", location: { city: "Moscow", country: "Russia" } },
    { id: 3, photo: avatar, followed: false, name: 'Artem', status: "", location: { city: "Kiev", country: "Ukraine" } },
  ],
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType ): UsersPageType => {
  switch (action.type) {
    case "FOLLOW-TO-USER":
      return {...state, users: state.users.map(item => item.id === action.userID ? {...item, followed: true} : item)}
    case "UNFOLLOW-TO-USER":
      return {...state, users: state.users.map(item => item.id === action.userID ? {...item, followed: false} : item)}
    case "SET-USERS":
      return {...state, users: [...state.users, ...action.users]}
    default:
      return state
  }
}

type FollowUserACType = ReturnType<typeof followUser>
const followUser = (userID: number) => {
  return {
    type: "FOLLOW-TO-USER",
    userID,
  } as const
}

type UnfollowUserACType = ReturnType<typeof unfollowUser>
const unfollowUser = (userID: number) => {
  return {
    type: "UNFOLLOW-TO-USER",
    userID,
  } as const
}

type SetUsersACType = ReturnType<typeof setUsers>
const setUsers = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    users
  } as const
}