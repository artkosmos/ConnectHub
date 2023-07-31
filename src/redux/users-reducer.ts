export type UsersPageType = {
  users: UserType[],
  countUsers: number,
  totalUsersCount: number,
  currentUsersPage: number,
  preloader: boolean
}

export type UserType = {
  id: number
  photos: {
    large: string | null
    small: string | null
  }
  followed: boolean
  name: string
  status: string
  location: {city: string, country: string}
}

type ActionType = FollowUserACType | UnfollowUserACType | SetUsersACType | SetCurrentPageACType | SetPreloaderACType

const initialState: UsersPageType = {
  users: [],
  countUsers: 5,
  totalUsersCount: 50,
  currentUsersPage: 1,
  preloader: false
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
    case "SET-PRELOADER":
      return {...state, preloader: action.value}
    default:
      return state
  }
}

type FollowUserACType = ReturnType<typeof followUser>
export const followUser = (userID: number) => {
  return {
    type: "FOLLOW-TO-USER",
    userID,
  } as const
}

type UnfollowUserACType = ReturnType<typeof unfollowUser>
export const unfollowUser = (userID: number) => {
  return {
    type: "UNFOLLOW-TO-USER",
    userID,
  } as const
}

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
  return {
    type: "SET-USERS",
    users
  } as const
}

type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
  return {
    type: "SET-CURRENT-PAGE",
    currentPage
  } as const
}

type SetPreloaderACType = ReturnType<typeof setPreloader>
export const setPreloader = (value: boolean) => {
  return {
    type: "SET-PRELOADER",
    value
  } as const
}