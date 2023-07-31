export type ActionProfileType = AddPostActionACType | ChangePostActionACType | SetUserProfileACType

export type PostType = {
  id: number
  message: string
  likes: number
}

export type ProfilePageType = {
  posts: PostType[]
  newPost: string
  userProfile: any
}

const initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hey, how are you today?', likes: 0},
    {id: 2, message: 'The weather is sunny. Who want to go walking?', likes: 4},
    {id: 3, message: 'Let\'s meet the people)', likes: 13},
    {id: 4, message: 'That\'s my first post here!', likes: 6}
  ],
  newPost: '',
  userProfile: undefined
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
export const setUserProfile = (profile: any) => {
  return {
    type: "SET-USER-PROFILE",
    profile
  } as const
}