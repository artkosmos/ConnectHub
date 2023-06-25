import style from "./Dialogs.module.scss"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {ActionType, changeMessageTextAC, DialogPageType, sendMessageAC} from "../../redux/state";
import {ChangeEvent} from "react";

type DialogsPropsType  = {
  state: DialogPageType
  dispatch: (action: ActionType) => void
  messageValue: string
}

function Dialogs(props: DialogsPropsType) {

  console.log(props.state)

  const mappedDialogs = props.state.dialogs.map((item) => {
    return (
      <DialogItem name={item.name} id={item.id} />
    )
  })

  const mappedMessages = props.state.messages.map((item) => {
    return (
      <MessageItem message={item.message} />
    )
  })

  const onClickSendMessageHandler = () => {
    props.dispatch(sendMessageAC())
  }

  const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeMessageTextAC(event.currentTarget.value))
  }

  return (
    <div className={style.dialogsContent}>
      <div className={`${style.people} ${style.dialogsContent__people}`}>
        {mappedDialogs}
      </div>
      <div className={`${style.messages} ${style.dialogsContent__messages}`}>
        {mappedMessages}
        <textarea value={props.messageValue} onChange={onChangeMessageHandler} placeholder={'Type message...'}></textarea>
        <button onClick={onClickSendMessageHandler}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;