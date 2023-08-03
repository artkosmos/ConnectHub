import {socialNetworkApi, UserType} from "../API/social-network-api";
import {AppDispatch, AppThunk} from "./redux-store";

export type UsersPageType = {
  users: AppUserType[]
  countUsers: number
  totalUsersCount: number
  currentUsersPage: number
  preloader: boolean
  followingInProgress: number[]
}
export type AppUserType = UserType & {
  location: {country: string}
}

type ActionType =
  FollowUserACType
  | UnfollowUserACType
  | SetUsersACType
  | SetCurrentPageACType
  | SetPreloaderACType
  | setDisableButtonACType
  | removeDisableButtonACType

const initialState: UsersPageType = {
  users: [],
  countUsers: 10,
  totalUsersCount: 200,
  currentUsersPage: 1,
  preloader: false,
  followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
  switch (action.type) {
    case "FOLLOW-TO-USER":
      return {...state, users: state.users.map(item => item.id === action.userID ? {...item, followed: true} : item)}
    case "UNFOLLOW-TO-USER":
      return {...state, users: state.users.map(item => item.id === action.userID ? {...item, followed: false} : item)}
    case "SET-USERS":
      return {...state, users: action.users.map(item => ({...item, location:{country: 'Belarus'}}))}
    case "SET-CURRENT-PAGE":
      return {...state, currentUsersPage: action.currentPage}
    case "SET-PRELOADER":
      return {...state, preloader: action.value}
    case "SET-DISABLE-BUTTON":
      return {...state, followingInProgress: [...state.followingInProgress, action.userId]}
    case "REMOVE-DISABLE-BUTTON":
      return {...state, followingInProgress: state.followingInProgress.filter(item => item !== action.userId)}
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

type setDisableButtonACType = ReturnType<typeof setDisableButton>
export const setDisableButton = (userId: number) => {
  return {
    type: "SET-DISABLE-BUTTON",
    userId
  } as const
}

type removeDisableButtonACType = ReturnType<typeof removeDisableButton>
export const removeDisableButton = (userId: number) => {
  return {
    type: "REMOVE-DISABLE-BUTTON",
    userId
  } as const
}


export const followTC = (userId: number): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setDisableButton(userId))
  socialNetworkApi.follow(userId)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(followUser(userId))
      }})
    .finally(() => dispatch(removeDisableButton(userId)))
}

export const unfollowTC = (userId: number): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setDisableButton(userId))
  socialNetworkApi.unfollow(userId)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowUser(userId))
      }})
    .finally(() => dispatch(removeDisableButton(userId)))
}

export const getUsersTC = (count: number, page: number): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setPreloader(true))
  socialNetworkApi.getUsers(count, page)
    .then(data => dispatch(setUsers(data)))
    .finally(() => dispatch(setPreloader(false)))
}