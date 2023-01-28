import React from "react";

import Card from "../../UI/Card/Card";

import styles from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <Card className={styles.todos}>
      <ul>
        {props.todoList.map((todo) => (
          <li id={todo.id} key={todo.id} onClick={props.onDeleteTodo}>
            <span>{todo.todo} - {new Date(todo.date).toUTCString().slice(0, -7)}</span>
            <button>X</button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
