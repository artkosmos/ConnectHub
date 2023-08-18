import React from "react";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

function Music() {

  const isAuth = useSelector<StateType, boolean>(state => state.auth.isLogIn)

  if (!isAuth) {
    return <Redirect to={'/login'}/>
  }
  return (
    <div>
      <h1>Music</h1>
    </div>
  )
}

export default Music;