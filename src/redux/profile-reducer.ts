export type ActionProfileType = AddPostActionACType | ChangePostActionACType

export type PostType = {
  id: number
  message: string
  likes: number
}

export type ProfilePageType = {
  posts: PostType[]
  newPost: string
}

const initialState: ProfilePageType = {
  posts: [
    {id: 1, message: 'Hey, how are you today?', likes: 0},
    {id: 1, message: 'The weather is sunny. Who want to go walking?', likes: 4},
    {id: 1, message: 'Let\'s meet the people)', likes: 13},
    {id: 1, message: 'That\'s my first post here!', likes: 6}
  ],
  newPost: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionProfileType): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST":
      const newPost: PostType = {id: new Date().getDate(), message: state.newPost, likes: 0}
      state.posts.unshift(newPost)
      state.newPost = ''
      return state
    case "CHANGE-POST-TEXT":
      state.newPost = action.value
      return state
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