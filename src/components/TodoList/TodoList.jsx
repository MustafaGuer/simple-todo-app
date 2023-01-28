import React from "react";

import TodoItem from "../TodoItem/TodoItem";
import Card from "../../UI/Card/Card";

import styles from "./TodoList.module.css";

const TodoList = (props) => {

  const deleteTodoHandler = (id) => {
    props.onDeleteTodo(id);
  }

  return (
    <Card className={styles.todos}>
      <ul>
        {props.todoList.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo.todo} date={todo.date} id={todo.id} onDeleteTodo={deleteTodoHandler} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
