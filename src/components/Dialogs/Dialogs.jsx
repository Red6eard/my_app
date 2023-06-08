import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={style.items}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <DialogItem name="Name 1" id="1" />
        <DialogItem name="Name 2" id="2" />
        <DialogItem name="Name 3" id="3" />
        <DialogItem name="Name 4" id="4" />
        <DialogItem name="Name 5" id="5" />
      </div>
      <div className={style.messages}>
        <Message message="Hi!" />
        <Message message="How are you?" />
        <Message message="I'm ok!" />
      </div>
    </div>
  );
};

export default Dialogs;
