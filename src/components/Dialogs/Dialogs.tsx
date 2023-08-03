import style from "./Dialogs.module.scss"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import React, {ChangeEvent} from "react";
import {CallBacksDialogsPropsType, DataDialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

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

  const onClickSendMessageHandler = () => {
    props.sendMessage()
  }

  const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeMessage(event.currentTarget.value)
  }

  return (
    <div className={style.dialogsContent}>
      <div className={`${style.people} ${style.dialogsContent__people}`}>
        {mappedDialogs}
      </div>
      <div className={`${style.messages} ${style.dialogsContent__messages}`}>
        {mappedMessages}
        <textarea value={props.state.newMessage} onChange={onChangeMessageHandler} placeholder={'Type message...'}></textarea>
        <button onClick={onClickSendMessageHandler}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;