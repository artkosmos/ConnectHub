type ActionType = setLoginUserACType

export type AuthStateType = {
  userId: number | undefined
  email: string | undefined
  login: string | undefined
  isLogIn: boolean
}

const initialState = {
  userId: undefined,
  email: undefined,
  login: undefined,
  isLogIn: false
}

export const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
  switch (action.type) {
    case "SET-LOGIN-USER":
      return {...state,...action.payload, isLogIn: true}
    default:
      return state
  }
}

type setLoginUserACType = ReturnType<typeof setLoginUser>
export const setLoginUser = (userId: number, email: string, login: string) => {
  return {
    type: "SET-LOGIN-USER",
    payload: {
      userId,
      email,
      login
    }
  } as const
}