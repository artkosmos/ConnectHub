import React from "react";
import style from "./Menu.module.scss"
import {NavLink} from "react-router-dom";

function Menu() {
  return (
    <nav className={style.menu}>
      <div>
        <NavLink
          to="/profile"
          className={style.menu__link}
          activeClassName={style.menu__link_active}
        >Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={style.menu__link}
          activeClassName={style.menu__link_active}
        >Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={style.menu__link}
          activeClassName={style.menu__link_active}
        >News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={style.menu__link}
          activeClassName={style.menu__link_active}
        >Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={style.menu__link}
          activeClassName={style.menu__link_active}
        >Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={style.menu__link}
          activeClassName={style.menu__link_active}
        >Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Menu;