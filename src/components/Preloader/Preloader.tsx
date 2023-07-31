import style from "./Preloader.module.scss";
import preloader from "./preloader.svg";
import React from "react";


export const Preloader = () => {
  return (
      <img
        className={style.preloader}
        src={preloader}
        alt="preloader"
      />
  )
}
