import {AppDispatch, AppThunk} from "./redux-store";
import {socialNetworkApi} from "../API/social-network-api";
import {LoginFormSubmitType} from "../components/Login/LoginForm";

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
      return {...state,...action.payload}
    default:
      return state
  }
}

type setLoginUserACType = ReturnType<typeof setLoginUser>
export const setLoginUser = (userId: number | undefined, email: string | undefined, login: string | undefined, isLogIn: boolean) => {
  return {
    type: "SET-LOGIN-USER",
    payload: {
      userId,
      email,
      login,
      isLogIn
    }
  } as const
}

export const checkAuthTC = (): AppThunk => (dispatch: AppDispatch) => {
  socialNetworkApi.checkAuth()
    .then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data
        dispatch(setLoginUser(id, email, login, true))
      } else {
        dispatch(setLoginUser(undefined, undefined, undefined, false))
      }
    })
}

export const logInTC = (data: LoginFormSubmitType): AppThunk => (dispatch: AppDispatch) => {
  socialNetworkApi.logIn(data)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(checkAuthTC())
      } else {
        alert(data.messages[0])
      }
    })
}

export const logOutTC = (): AppThunk => (dispatch: AppDispatch) => {
  debugger
  socialNetworkApi.logOut()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(checkAuthTC())
      } else {
        alert(data.messages[0])
      }
    })
}