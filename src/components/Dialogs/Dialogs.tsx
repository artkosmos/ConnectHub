import React from "react";
import style from "./Dialogs.module.scss"
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


function Dialogs() {

  const dialogs = [
    {id: 1, name: 'Victor'},
    {id: 2, name: 'Jon'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Jasmine'},
    {id: 5, name: 'Vladimir'},
    {id: 6, name: 'Nicola'},
  ]
  const messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'I\'m fine, thanks!'},
    {id: 4, message: 'What did you do at the weekend?'},
    {id: 5, message: 'Did you see that movie?'},
    {id: 6, message: 'I\'m hungry. Let\'s have lunch'},
  ]

  const mappedDialogs = dialogs.map((item) => {
    return (
      <DialogItem name={item.name} id={item.id} />
    )
  })

  const mappedMessages = messages.map((item) => {
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