import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>
        <div className={style.items}>Name 1</div>
        <div className={style.items}>Name 2</div>
        <div className={style.items}>Name 3</div>
        <div className={style.items}>Name 4</div>
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
