import React from "react";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

function News() {

  const isAuth = useSelector<StateType, boolean>(state => state.auth.isLogIn)

  if (!isAuth) {
    return <Redirect to={'/login'}/>
  }

  return (
    <div>
      <h1>News</h1>
    </div>
  )
}

export default News;