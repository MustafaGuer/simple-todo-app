import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const deleteHandler = () => {
    props.onDeleteTodo(props.id);
  };

  return (
    <div className={styles.todoItem} onClick={deleteHandler}>
      <span>{props.todo}</span>
      <span>{new Date(props.date).toUTCString().slice(0, -7)}</span>
    </div>
  );
};

export default TodoItem;
