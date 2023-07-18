export type UsersPageType = {
  users: UserType[],
  countUsers: number,
  totalUsersCount: number,
  currentUsersPage: number
}

export type UserType = {
  id: number
  photo: string
  followed: boolean
  name: string
  status: string
  location: {city: string, country: string}
}

type ActionType = FollowUserACType | UnfollowUserACType | SetUsersACType | SetCurrentPageACType

const initialState: UsersPageType = {
  users: [],
  countUsers: 5,
  totalUsersCount: 50,
  currentUsersPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType ): UsersPageType => {
  switch (action.type) {
    case "FOLLOW-TO-USER":
      return {...state, users: state.users.map(item => item.id === action.userID ? {...item, followed: true} : item)}
    case "UNFOLLOW-TO-USER":
      return {...state, users: state.users.map(item => item.id === action.userID ? {...item, followed: false} : item)}
    case "SET-USERS":
      return {...state, users: [...action.users]}
    case "SET-CURRENT-PAGE":
      return {...state, currentUsersPage: action.currentPage}
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

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage
  } as const
}