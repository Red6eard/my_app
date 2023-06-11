import React from "react";
import style from "./ProfileInfo.module.css";

const Info = (props) => {
  return (
    <div className={style.myInfo}>
      <div className={style.ava}>
        <img className={style.image} src="https://www.w3schools.com/howto/img_avatar.png" alt="ava" />
      </div>
      <div className={style.description}>
        <p className={style.text}>
            {/* разбить на компоненты */}
            My name: NAME<br/>
            My age: AGE<br/>
            My city: CITY
        </p>
      </div>
    </div>
  );
};

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://preview.redd.it/v1fvin01ynv51.jpg?auto=webp&s=dc5339071eb58f278ba14aab615b24b8ddbfd2dc"
          alt="preview"
        />
      </div>
      <Info />
    </div>
  );
};

export default ProfileInfo;
