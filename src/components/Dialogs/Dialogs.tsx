import React from "react";
import style from "./Dialogs.module.scss"
import {NavLink} from "react-router-dom";

function Dialogs() {
  return (
    <div className={style.dialogsContent}>
      <div className={`${style.people} ${style.dialogsContent__people}`}>
        <div>
          <NavLink
            to="/dialogs/1"
            className={style.people__item}
            activeClassName={style.people__item_active}
          >Alena
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/2"
            className={style.people__item}
            activeClassName={style.people__item_active}
          >Victor
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/3"
            className={style.people__item}
            activeClassName={style.people__item_active}
          >Jasmine
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/4"
            className={style.people__item}
            activeClassName={style.people__item_active}
          >Jon
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs/5"
            className={style.people__item}
            activeClassName={style.people__item_active}
          >Max
          </NavLink>
        </div>
      </div>
      <div className={`${style.messages} ${style.dialogsContent__messages}`}>
        <div className={style.messages__item}>Hello!</div>
        <div className={style.messages__item}>How are you doing?</div>
        <div className={style.messages__item}>I'm fine, thanks!</div>
      </div>
    </div>
  )
}

export default Dialogs;