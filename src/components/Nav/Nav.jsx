import React from "react";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.center}`}>
        <a href="#">Profile</a>
      </div>
      <div className={`${style.item} ${style.center}`}>
        <a href="#">Messages</a>
      </div>
      <div className={`${style.item} ${style.center}`}>
        <a href="#">News</a>
      </div>
      <div className={`${style.item} ${style.center}`}>
        <a href="#">Music</a>
      </div>
      <div className={`${style.item} ${style.center}`}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
