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

let dialogs = [
  {id: 1, name: "Name 1"},
  {id: 2, name: "Name 2"},
  {id: 3, name: "Name 3"},
  {id: 4, name: "Name 4"},
  {id: 5, name: "Name 5"},
  {id: 6, name: "Name 6"}
];

let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);



let messages = [
  {id: 1, message: "Hi!"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "I'm ok!"},
  {id: 4, message: "Yooo!"},
];

let messageElement = messages.map(message => <Message message={message.message} id={message.id} />)






const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        { dialogsElements }
      </div>
      <div className={style.messages}>
        { messageElement }
      </div>
    </div>
  );
};

export default Dialogs;
