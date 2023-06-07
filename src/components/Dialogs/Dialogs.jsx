import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <div className={style.items}>
          <NavLink to="/dialogs/1">Name 1</NavLink>
        </div>
        <div className={style.items}>
          <NavLink to="/dialogs/2">Name 2</NavLink>
        </div>
        <div className={style.items}>
          <NavLink to="/dialogs/3">Name 3</NavLink>
        </div>
        <div className={style.items}>
          <NavLink to="/dialogs/4">Name 4</NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi!</div>
        <div className={style.message}>How are you?</div>
        <div className={style.message}>I'm OK!</div>
      </div>
    </div>
  );
};

export default Dialogs;
