import React from "react";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

function Settings() {

  const isAuth = useSelector<StateType, boolean>(state => state.auth.isLogIn)

  if (!isAuth) {
    return <Redirect to={'/login'}/>
  }

  return (
    <div>
      <h1>Settings</h1>
    </div>
  )
}

export default Settings;