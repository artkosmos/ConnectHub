import {combineReducers, createStore} from "redux";
import {ActionDialogType, dialogReducer} from "./dialogs-reducer";
import {ActionProfileType, profileReducer} from "./profile-reducer";

export type StoreType = ReturnType<typeof reduxStore.getState>
export type ActionType = ActionProfileType | ActionDialogType

const reducers = combineReducers({ // объединение
  dialogPage: dialogReducer,
  profilePage: profileReducer
})
export const reduxStore = createStore(reducers)