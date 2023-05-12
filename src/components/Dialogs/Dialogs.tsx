import React from "react";
import style from "./Dialogs.module.scss"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../index";

type DialogsPropsType  = {
  messages: MessageType[]
  dialogs: DialogType[]
}

function Dialogs(props: DialogsPropsType) {

  const mappedDialogs = props.dialogs.map((item) => {
    return (
      <DialogItem name={item.name} id={item.id} />
    )
  })

  const mappedMessages = props.messages.map((item) => {
    return (
      <MessageItem message={item.message} />
    )
  })

  return (
    <div className={style.dialogsContent}>
      <div className={`${style.people} ${style.dialogsContent__people}`}>
        {mappedDialogs}
      </div>
      <div className={`${style.messages} ${style.dialogsContent__messages}`}>
        {mappedMessages}
      </div>
    </div>
  )
}

export default Dialogs;