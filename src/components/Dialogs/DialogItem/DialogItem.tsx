import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../Dialogs.module.scss";

type DialogPropsType = {
  name: string
  id: number
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

export default DialogItem;