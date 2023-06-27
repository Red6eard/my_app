import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {



  return (
    <main className={style.wrap}>
      <ProfileInfo />
      <MyPosts posts={props.state} />
    </main>
  );
};

export default Profile;
