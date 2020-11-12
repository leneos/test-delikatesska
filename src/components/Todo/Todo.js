import React from "react";
import "./Todo.scss";
import button from "../../img/button.svg";

export const Todo = (props) => {
  return (
    <li className={`Todo ${props.isDone ? "done" : ""}`}>
      <p>{props.text}</p>
      <div className="Todo-btns">
        <button className="delete-btn" onClick={props.delete}>
          X
        </button>
        <button onClick={props.toggleStatus} className="toggle-btn">
          {props.isDone ? (
            <img width="18" height="18" src={button} alt="" />
          ) : null}
        </button>
      </div>
    </li>
  );
};
