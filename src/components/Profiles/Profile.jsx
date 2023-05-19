import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <main>
      <div>
        <img
          src="https://preview.redd.it/v1fvin01ynv51.jpg?auto=webp&s=dc5339071eb58f278ba14aab615b24b8ddbfd2dc"
          alt="preview"
        />
      </div>
      <div>ava+description</div>
      <MyPosts />
    </main>
  );
};

export default Profile;
