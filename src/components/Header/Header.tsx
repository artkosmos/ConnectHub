import React from "react";
import style from "./Header.module.scss"
import logo from "./twitter-seeklogo.com.svg"
import {NavLink, Redirect} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

function  Header(props: HeaderPropsType) {

  const logOutHandler = () => {
    props.logOutTC()
  }

  return (
    <header className={style.header}>
      <div className={style.brand}>
        <img className={style.logo} src={logo} alt="logo"/>
        <h1 className={style.title}>#RETWITTER</h1>
      </div>
      <div className={style.auth}>
        {props.isAuth
          ? <div className={style.logInfo}>
            <span className={style.user}>{props.login}</span>
            |
            <span onClick={logOutHandler} className={style.logOut}>Log out</span></div>
          : <NavLink
            className={style.logIn}
            to={'/login'}>
            Log In
          </NavLink>}
      </div>
    </header>
  )
}

export default Header;