export type UsersPageType = {
  users: UserType[]
}

export type UserType = {
  id: number
  photo: string
  followed: boolean
  name: string
  status: string
  location: {city: string, country: string}
}

type ActionType = FollowUserACType | UnfollowUserACType | SetUsersACType

const initialState: UsersPageType = {
  users: []
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

type FollowUserACType = ReturnType<typeof followUserAC>
export const followUserAC = (userID: number) => {
  return {
    type: "FOLLOW-TO-USER",
    userID,
  } as const
}

type UnfollowUserACType = ReturnType<typeof unfollowUserAC>
export const unfollowUserAC = (userID: number) => {
  return {
    type: "UNFOLLOW-TO-USER",
    userID,
  } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    users
  } as const
}