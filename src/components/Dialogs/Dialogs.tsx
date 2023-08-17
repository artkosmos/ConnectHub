import style from "./Dialogs.module.scss"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {CallBacksDialogsPropsType, DataDialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {Field, Form} from "react-final-form";
import {SendMessageForm} from "../SenMessageForm/SendMessageForm";

type DialogsPropsType  = DataDialogsPropsType & CallBacksDialogsPropsType

function Dialogs(props: DialogsPropsType) {

  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
  }

  const mappedDialogs = props.state.dialogs.map((item) => {
    return (
      <DialogItem key={item.id} name={item.name} id={item.id} />
    )
  })

  const mappedMessages = props.state.messages.map((item) => {
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