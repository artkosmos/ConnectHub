import {Redirect} from "react-router-dom";
import React, {ReactElement} from "react";


export const withRedirect = (Component: ReactElement) => {
  return Component.props.isAuth ? Component : <Redirect to={'/login'}/>
}