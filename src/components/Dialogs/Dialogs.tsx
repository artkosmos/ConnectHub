import React from "react";
import style from "./Dialogs.module.scss"
import {NavLink} from "react-router-dom";
import {message} from "antd";

type DialogPropsType = {
  name: string
  id: number
}

type MessagesPropsType = {
  message: string
}

function DialogItem (props: DialogPropsType) {
  return (
    <div>
      <NavLink
        to={`/dialogs/${props.id}`}
        className={style.people__item}
        activeClassName={style.people__item_active}
      >{props.name}
      </NavLink>
    </div>
  )
}

function MessageItem (props: MessagesPropsType) {
  return <div className={style.messages__item}>{props.message}</div>
}

function Dialogs() {
  return (
    <div className={style.dialogsContent}>
      <div className={`${style.people} ${style.dialogsContent__people}`}>
        <DialogItem name={"Victor"} id={1} />
        <DialogItem name={"Jon"} id={2} />
        <DialogItem name={"Alex"} id={3} />
        <DialogItem name={"Jasmine"} id={4} />
        <DialogItem name={"Vladimir"} id={5} />
      </div>
      <div className={`${style.messages} ${style.dialogsContent__messages}`}>
        <MessageItem message={"Hello!"} />
        <MessageItem message={"How are you doing?"} />
        <MessageItem message={"I'm fine, thanks!"} />
      </div>
    </div>
  )
}

export default Dialogs;