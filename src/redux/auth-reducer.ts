import {AppDispatch, AppThunk} from "./redux-store";
import {socialNetworkApi} from "../API/social-network-api";
import {LoginFormSubmitType} from "../components/Login/LoginForm";

type ActionType = setLoginUserACType | setErrorACType

export type AuthStateType = {
  userId: number | undefined
  email: string | undefined
  login: string | undefined
  isLogIn: boolean
  authError: null | string
}

const initialState = {
  userId: undefined,
  email: undefined,
  login: undefined,
  isLogIn: false,
  authError: null
}

export const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
  switch (action.type) {
    case "SET-LOGIN-USER":
      return {...state,...action.payload}
    case "SET-AUTH-ERROR":
      return {...state, authError: action.payload.error}
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

type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (error: null | string) => {
  return {
    type: "SET-AUTH-ERROR",
    payload: {
      error
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
        dispatch(setErrorAC(null))
      } else {
        dispatch(setErrorAC(data.messages[0]))
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