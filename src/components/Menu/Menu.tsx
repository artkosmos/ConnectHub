import React from "react";
import style from "./Menu.module.scss"

function Menu() {
  return (
    <nav className={style.menu}>
      <div>
        <a href="src/components/Menu/Menu#">Profile</a>
      </div>
      <div>
        <a href="src/components/Menu/Menu#">Messages</a>
      </div>
      <div>
        <a href="src/components/Menu/Menu#">News</a>
      </div>
      <div>
        <a href="src/components/Menu/Menu#">Music</a>
      </div>
      <div>
        <a href="src/components/Menu/Menu#">Settings</a>
      </div>
    </nav>
  )
}

export default Menu;