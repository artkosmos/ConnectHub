import React from "react";
import s from "./Profile.module.css"

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
      <div className="post">
        <div className="post__title">My posts</div>
        <div className="post__area"></div>
        <button>Send it</button>
      </div>
      <div className="previous_posts">
        <div className="previous_posts__1">Post 1</div>
        <div className="previous_posts__2">Post 2</div>
      </div>
    </div>
  )
}

export default Profile;