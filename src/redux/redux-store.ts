import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

const reducers = combineReducers({ // объединение
  dialogPage: dialogReducer,
  profilePage: profileReducer
})
export const reduxStore = createStore(reducers)