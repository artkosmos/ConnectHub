import React from "react";
import s from "./Profile.module.scss"
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
  return (
    <div className={s.content}>
      <img className={s.preview_img}
         src="https://mp2023.nyc3.digitaloceanspaces.com/689084892688/2021/06/24/thumbnails/a47tusiqw9d2au1a.jpg"
         alt="preview"/>
      <div className={s.about}>
        <img className={s.about__avatar}
           src="https://weblinks.ru/wp-content/uploads/2021/04/3zeynnx6ija.jpg"
           alt="avatar"/>
        <div className="about__info"></div>
      </div>
      < MyPosts />
    </div>
  )
}

export default Profile;