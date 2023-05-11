import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <main className={style.content}>
      <div>
        <img
          src="https://preview.redd.it/v1fvin01ynv51.jpg?auto=webp&s=dc5339071eb58f278ba14aab615b24b8ddbfd2dc"
          alt="preview"
        />
      </div>
      <div>ava+description</div>
      <div>
        my posts
        <div>new post</div>
      </div>
      <div className={style.posts}>
        <div className={style.post}>post 1</div>
        <div className={style.post}>post 2</div>
      </div>
    </main>
  );
};

export default Profile;
