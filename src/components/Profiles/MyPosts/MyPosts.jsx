import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={style.myPosts}>
      <span className={style.myPostsDesc}>My posts</span>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hello, World!" likesCount="100" />
        <Post message="How are you?" likesCount="55" />
        <Post message="This is my first React project!" likesCount="999" />
      </div>
    </div>
  );
};

export default MyPosts;
