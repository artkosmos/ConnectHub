import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../Dialogs.module.scss";
import avatar from './avatar1.png'

type DialogPropsType = {
  name: string
  id: number
}

function DialogItem (props: DialogPropsType) {
  return (
    <div className={style.people__logoAndItem}>
      <div><img src={avatar} alt="avatar" className={style.people__logo}/></div>
      <NavLink
        to={`/dialogs/${props.id}`}
        className={style.people__item}
        activeClassName={style.people__item_active}
      >{props.name}
      </NavLink>
    </div>
  )
}

export default DialogItem;