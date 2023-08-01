import React from "react";
import style from "./Header.module.scss"
import logo from "./twitter-seeklogo.com.svg"
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

function  Header(props: HeaderPropsType) {
  console.log(props)
  return (
    <header className={style.header}>
      <div className={style.brand}>
        <img className={style.logo} src={logo} alt="logo"/>
        <h1 className={style.title}>#RETWITTER</h1>
      </div>
      <div className={style.auth}>
        {props.isAuth
          ? <div className={style.user}>{props.login}</div>
          : <NavLink
            className={style.login}
            to={'/login'}>
            Log In
          </NavLink>}
      </div>
    </header>
  )

}

export default Header;