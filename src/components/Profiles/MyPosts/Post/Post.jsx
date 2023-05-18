import React from "react";
import style from "./Post.module.css";

const Post = () => {
  return (
    <div className={style.post}>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="ava" />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
