import React from "react";
import style from "./Header.module.scss"
import logo from "./twitter-seeklogo.com.svg"

function  Header() {
  return (
    <header className={style.header}>
      <img className={style.header__logo} src={logo} alt="logo"/>
      <h1 className={style.header__title}>#RETWITTER</h1>
    </header>
  )

}

export default Header;