import {changeMessageTextAC, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerPropsType  = {
}

function DialogsContainer(props: DialogsContainerPropsType) {

  const state = props.store.getState().dialogPage
  
  const onClickSendMessageHandler = () => {
    props.store.dispatch(sendMessageAC())
  }

  const onChangeMessageHandler = (text: string) => {
    props.store.dispatch(changeMessageTextAC(text))
  }

  return (
    <Dialogs
      state={state}
      messageValue={state.newMessage}
      sendMessage={onClickSendMessageHandler}
      changeMessage={onChangeMessageHandler}
    />
  )
}

export default DialogsContainer;