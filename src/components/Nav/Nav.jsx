import React from "react";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.center}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={`${style.item} ${style.center}`}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={`${style.item} ${style.center}`}>
        <a href="/news">News</a>
      </div>
      <div className={`${style.item} ${style.center}`}>
        <a href="/music">Music</a>
      </div>
      <div className={`${style.item} ${style.center}`}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
