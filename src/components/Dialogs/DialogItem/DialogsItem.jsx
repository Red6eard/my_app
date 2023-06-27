import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={style.items}>
      <NavLink to={"/dialogs/" + props.id}><img src="https://www.w3schools.com/howto/img_avatar.png" alt="ava" />{props.name}</NavLink>
    </div>
  );
};



export default DialogItem;
