import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";





const MyPosts = (props) => {


  let postsElements = props.posts.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  ));


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
