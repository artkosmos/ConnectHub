import React from "react";
import s from "./Menu.module.scss"

function Menu() {
  return (
    <nav className={s.menu}>
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