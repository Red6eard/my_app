import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

let posts = [
  { id: 1, message: "Hello, World!", likesCount: 1000 },
  { id: 2, message: "How are you?", likesCount: 150 },
  { id: 3, message: "This is my first React project!", likesCount: 100 },
  { id: 4, message: "Yo!", likesCount: 1150 },
];

let postsElements = posts.map((post) => (
  <Post message={post.message} likesCount={post.likesCount} id={post.id} />
));

const MyPosts = (props) => {
  return (
    <div className={style.myPosts}>
      <span className={style.myPostsDesc}>My posts</span>
      {/*  разбить на компоненты  */}
      <div className={style.enterText}>
        <textarea placeholder="Ваш коментарий"></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
