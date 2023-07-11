import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";

export type StoreType = typeof reduxStore
export type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>

const rootReducer = combineReducers({ // объединение
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer
})
export const reduxStore = createStore(rootReducer)