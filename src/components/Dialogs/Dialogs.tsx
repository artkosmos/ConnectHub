import React, {LegacyRef, useRef} from "react";
import style from "./Dialogs.module.scss"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType  = {
  state: DialogPageType
}

function Dialogs(props: DialogsPropsType) {

  // let message = React.createRef<HTMLTextAreaElement>()
  let message = useRef<HTMLTextAreaElement>(null)


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
    // message.current?.value
  }

  return (
    <div className={style.dialogsContent}>
      <div className={`${style.people} ${style.dialogsContent__people}`}>
        {mappedDialogs}
      </div>
      <div className={`${style.messages} ${style.dialogsContent__messages}`}>
        {mappedMessages}
        <textarea ref={message} placeholder={'Type message...'}></textarea>
        <button onClick={onClickSendMessageHandler}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;