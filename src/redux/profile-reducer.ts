import {AppDispatch, AppThunk} from "./redux-store";
import {ProfileInfoType, socialNetworkApi} from "../API/social-network-api";

export type ActionProfileType =
  AddPostActionACType
  | SetUserProfileACType
  | SetProfilePreloaderACType
  | SetProfileStatusACType
  | DeletePostACType
  | setPhotoACType
  | setErrorACType

export type PostType = {
  id: number
  message: string
  likes: number
}

export type ProfilePageType = {
  posts: PostType[]
  userProfile: null | ProfileInfoType
  preloader: boolean
  status: string
  error: null | string
}

const initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hey, how are you today?', likes: 0},
    {id: 2, message: 'The weather is sunny. Who want to go walking?', likes: 4},
    {id: 3, message: 'Let\'s meet the people)', likes: 13},
    {id: 4, message: 'That\'s my first post here!', likes: 6}
  ],
  userProfile: null,
  preloader: true,
  status: '',
  error: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      const newPost: PostType = {id: new Date().getDate(), message: action.message, likes: 0}
      return {...state, posts: [...state.posts, newPost]}
    case "SET-USER-PROFILE":
      return {...state, userProfile: action.profile}
    case "SET-PROFILE-PRELOADER":
      return {...state, preloader: action.value}
    case "SET-PROFILE-STATUS":
      return {...state, status: action.status}
    case "DELETE-POST":
      return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
    case "SET-PROFILE-PHOTO":
      return {
        ...state,
        userProfile: state.userProfile ? {...state.userProfile, photos: action.photos} : state.userProfile
      }
    case "SET-ERROR":
      return {...state, error: action.error}
    default:
      return state
  }
}


export type AddPostActionACType = ReturnType<typeof addPost>
export const addPost = (message: string) => {
  return {
    type: "ADD-POST",
    message
  } as const
}

export type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileInfoType) => {
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

type DeletePostACType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => {
  return {
    type: "DELETE-POST",
    postId
  } as const
}

type setPhotoACType = ReturnType<typeof setPhoto>
export const setPhoto = (photos: { small: string, large: string }) => {
  return {
    type: "SET-PROFILE-PHOTO",
    photos
  } as const
}

type setErrorACType = ReturnType<typeof setError>
export const setError = (error: string | null) => {
  return {
    type: "SET-ERROR",
    error
  } as const
}

export const getProfileTC = (userId: string): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(setProfilePreloader(true))
  const response = await socialNetworkApi.getProfile(userId)
  dispatch(setUserProfile(response))
  dispatch(setProfilePreloader(false))
}

export const getProfileStatusTC = (userId: string): AppThunk => async (dispatch: AppDispatch) => {
  const response = await socialNetworkApi.getProfileStatus(userId)
  if (response === null) {
    dispatch(setProfileStatus(''))
  } else {
    dispatch(setProfileStatus(response))
  }
}

export const updateProfileStatusTC = (status: string): AppThunk => async (dispatch: AppDispatch) => {
  const response = await socialNetworkApi.updateProfileStatus(status)
  if (response.resultCode === 0) {
    dispatch(setProfileStatus(status))
  }
}

export const updateProfilePhotoTC = (photo: File): AppThunk => async (dispatch: AppDispatch, getState) => {
  const userId = String(getState().profilePage.userProfile?.userId)
  const response = await socialNetworkApi.uploadPhoto(photo)
  if (response.resultCode === 0) {
    dispatch(setPhoto(response.data))
    dispatch(getProfileTC(userId))
  }
}

export const updateProfileInfoTC = (profile: ProfileInfoType): AppThunk => async (dispatch: AppDispatch, getState) => {
  const userId = String(getState().profilePage.userProfile?.userId)
  const response = await socialNetworkApi.updateProfile(profile)
  if (response.resultCode === 0) {
    dispatch(getProfileTC(userId))
    dispatch(setError(null))
  } else {
    dispatch(setError(response.messages[0]))
  }
}