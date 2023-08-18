import React from "react"
import style from './Login.module.scss'
import {LoginForm} from "./LoginForm";



export function Login() {
  return (
    <div>
      <h3 className={style.title}>You're not in system. Please log in</h3>
      <LoginForm/>
    </div>
  )
}
