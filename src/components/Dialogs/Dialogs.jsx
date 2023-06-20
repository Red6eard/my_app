import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messageElement = props.messages.map(message => <Message message={message.message} id={message.id} />);

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
