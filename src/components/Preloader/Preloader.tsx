import style from "./Preloader.module.scss";
import preloader from "./preloader.svg";
import React from "react";

type PreloaderPropsType = {
  preloader: boolean
}

export const Preloader = (props: PreloaderPropsType) => {
  return (
      <img
        className={props.preloader ? `${style.preloader} ${style.preloader_active}` : style.preloader}
        src={preloader}
        alt="preloader"
      />
  )
}
