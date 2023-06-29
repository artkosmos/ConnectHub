import {changeMessageTextAC, DialogPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type DataDialogsPropsType = {
  state: DialogPageType
}

export type CallBacksDialogsPropsType = {
  sendMessage: () => void
  changeMessage: (text: string) => void
}

const data = (state: StateType): DataDialogsPropsType => {
  return {
    state: state.dialogPage
  }
}
const callBacks = (dispatch: Dispatch): CallBacksDialogsPropsType => {
  return {
    sendMessage: () => dispatch(sendMessageAC()),
    changeMessage: (text: string) => dispatch(changeMessageTextAC(text))
  }
}

const DialogsContainer = connect(data, callBacks)(Dialogs)

export default DialogsContainer;