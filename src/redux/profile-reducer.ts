import {AppDispatch, AppThunk} from "./redux-store";
import {ResponseProfileType, socialNetworkApi} from "../API/social-network-api";

export type ActionProfileType =
  AddPostActionACType
  | ChangePostActionACType
  | SetUserProfileACType
  | SetProfilePreloaderACType
  | SetProfileStatusACType

export type PostType = {
  id: number
  message: string
  likes: number
}

export type ProfilePageType = {
  posts: PostType[]
  newPost: string
  userProfile: any
  preloader: boolean,
  status: string
}

const initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hey, how are you today?', likes: 0},
    {id: 2, message: 'The weather is sunny. Who want to go walking?', likes: 4},
    {id: 3, message: 'Let\'s meet the people)', likes: 13},
    {id: 4, message: 'That\'s my first post here!', likes: 6}
  ],
  newPost: '',
  userProfile: undefined,
  preloader: true,
  status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      const newPost: PostType = {id: new Date().getDate(), message: state.newPost, likes: 0}
      return {...state, posts: [...state.posts, newPost], newPost: ''}
    case "CHANGE-POST-TEXT":
      return {...state, newPost: action.value}
    case "SET-USER-PROFILE":
      return {...state, userProfile: action.profile}
    case "SET-PROFILE-PRELOADER":
      return {...state, preloader: action.value}
    case "SET-PROFILE-STATUS":
      return {...state, status: action.status}
    default:
      return state
  }
}


export type AddPostActionACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
  return {
    type: "ADD-POST"
  } as const
}

export type ChangePostActionACType = ReturnType<typeof changePostTextAC>
export const changePostTextAC = (value: string) => {
  return {
    type: "CHANGE-POST-TEXT",
    value
  } as const
}

export type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ResponseProfileType) => {
  return {
    type: "SET-USER-PROFILE",
    profile
  } as const
}

type SetProfilePreloaderACType = ReturnType<typeof setProfilePreloader>
export const setProfilePreloader = (value: boolean) => {
  return {
    type: "SET-PROFILE-PRELOADER",
    value
  } as const
}

type SetProfileStatusACType = ReturnType<typeof setProfileStatus>
export const setProfileStatus = (status: string) => {
  return {
    type: "SET-PROFILE-STATUS",
    status
  } as const
}

export const getProfileTC = (userId: string): AppThunk => (dispatch: AppDispatch) => {
  dispatch(setProfilePreloader(true))
  socialNetworkApi.getProfile(userId)
    .then(data => dispatch(setUserProfile(data)))
    .finally(() => dispatch(setProfilePreloader(false)))
}

export const getProfileStatusTC = (userId: string): AppThunk => (dispatch: AppDispatch) => {
  socialNetworkApi.getProfileStatus(userId)
    .then(data => {
      if (data === null) {
        dispatch(setProfileStatus(''))
      } else {
        dispatch(setProfileStatus(data))
      }
    })
}

export const updateProfileStatusTC = (status: string): AppThunk => (dispatch: AppDispatch) => {
  socialNetworkApi.updateProfileStatus(status)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setProfileStatus(status))
      }
    })
}