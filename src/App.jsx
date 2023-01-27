import React, { useState } from "react";
import styles from "./App.module.css";
import AddTodo from "./components/AddTodo/AddTodo";
import logo from "./logo.svg";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (todo) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, todo];
    });
  };
  console.log(todoList);
  return (
    <div>
      <h1 className={styles.h1}>
        <img src={logo} alt="Logo from React" />
        The very simple Todo App
        <img src={logo} alt="Logo from React" />
      </h1>
      <AddTodo onAddTodo={addTodoHandler} todosAmount={todoList.length} />
    </div>
  );
}

export default App;
