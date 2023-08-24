import style from "./Dialogs.module.scss"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {Redirect} from "react-router-dom";
import {SendMessageForm} from "../SenMessageForm/SendMessageForm";
import {DialogsPropsType} from "./DialogsContainer";



function Dialogs(props: DialogsPropsType) {

  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
  }

  const mappedDialogs = props.dialogs.map((item) => {
    return (
      <DialogItem key={item.id} name={item.name} id={item.id} />
    )
  })

  const mappedMessages = props.messages.map((item) => {
    return (
      <MessageItem key={item.id} message={item.message} />
    )
  })

  const onClickSendMessageHandler = (message: string) => {
    props.sendMessage(message)
  }

  return (
    <div className={style.dialogsContent}>
      <div className={`${style.people} ${style.dialogsContent__people}`}>
        {mappedDialogs}
      </div>
      <div className={style.dialogsContent__messagesWrapper}>
        <div className={style.messages}>{mappedMessages}</div>
        <SendMessageForm callBack={onClickSendMessageHandler}/>
      </div>
    </div>
  )
}

export default Dialogs;