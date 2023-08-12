import {DialogPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";

export type DataDialogsPropsType = {
  state: DialogPageType
  isAuth: boolean
}

export type CallBacksDialogsPropsType = {
  sendMessage: (message: string) => void
}

const data = (state: StateType): DataDialogsPropsType => {
  return {
    state: state.dialogPage,
    isAuth: state.auth.isLogIn
  }
}
const callBacks = (dispatch: Dispatch): CallBacksDialogsPropsType => {
  return {
    sendMessage: (message: string) => dispatch(sendMessageAC(message)),
  }
}

export default compose(
  connect(data, callBacks)
)(Dialogs)