import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";



const Nav = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.center}`}>
        <NavLink to="/profile"className={navData => navData.isActive ? style.active : style.item} >Profile</NavLink>
      </div>
      <div className={` ${style.center}`}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? style.active : style.item}>Messages</NavLink>
      </div>
      <div className={`${style.center}`}>
        <NavLink to="/news" className={navData => navData.isActive ? style.active : style.item}>News</NavLink>
      </div>
      <div className={`${style.center}`}>
        <NavLink to="/music" className={navData => navData.isActive ? style.active : style.item}>Music</NavLink>
      </div>
      <div className={`${style.center}`}>
        <NavLink to="/settings" className={navData => navData.isActive ? style.active : style.item}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
