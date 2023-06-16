import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <p>{props.id}</p>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="ava" />
      {props.message}
      <div>
        <span>Like:{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
