import {DialogType, MessageType, sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {compose} from "redux";
import {getDialogs, getMessages, isAuthorized} from "../../selectors/selectors";

type MapStateToPropsType = {
  isAuth: boolean
  dialogs: DialogType[]
  messages: MessageType[]
}

type MapDispatchToPropsType = {
  sendMessage: (message: string) => void
}

export type DialogsPropsType  = MapStateToPropsType & MapDispatchToPropsType

const mapDispatchToProps = (state: StateType) => {
  return {
    dialogs: getDialogs(state),
    messages: getMessages(state),
    isAuth: isAuthorized(state)
  }
}
const actionCreators = {
  sendMessage
}

export default compose(
  connect(mapDispatchToProps, actionCreators)
)(Dialogs)