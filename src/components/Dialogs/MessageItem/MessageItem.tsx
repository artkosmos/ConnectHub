import React from 'react';
import style from "../Dialogs.module.scss";

type MessagesPropsType = {
  message: string
}

const MessageItem = (props:MessagesPropsType) => {
  return (
    <div className={style.messages__item}>
      {props.message}
    </div>
  );
};

export default MessageItem;