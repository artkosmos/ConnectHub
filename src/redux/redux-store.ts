import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {dialogReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer} from "./app-reducer";

export type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>

const rootReducer = combineReducers({ // объединение
  dialogPage: dialogReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
})

export type AppDispatch = ThunkDispatch<StateType, unknown, AnyAction>
export type AppThunk = ThunkAction<void, StateType, unknown, AnyAction>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const reduxStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))