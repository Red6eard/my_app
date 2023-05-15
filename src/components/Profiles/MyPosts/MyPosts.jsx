import React from "react";
import style from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={style.myPosts}>
      my posts
      <div>new post</div>
      <div className={style.posts}>
        <div className={style.post}>post 1</div>
        <div className={style.post}>post 2</div>
      </div>
    </div>
  );
};

export default MyPosts;
