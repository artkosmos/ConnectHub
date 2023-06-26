import {ActionType, PostType, ProfilePageType} from "./store";

export type ActionProfileType = AddPostActionACType | ChangePostActionACType

export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
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