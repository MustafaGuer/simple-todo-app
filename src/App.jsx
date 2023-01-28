import React, { useState } from "react";
import styles from "./App.module.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import logo from "./logo.svg";

function App() {
  const dataFromStorage = JSON.parse(localStorage.getItem("todos"));

  const [todoList, setTodoList] = useState(dataFromStorage || []);
  const [error, setError] = useState();
  const [deleteError, setDeleteError] = useState();

  const addTodoHandler = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };

  localStorage.setItem("todos", JSON.stringify(todoList));

  const deleteTodoHandler = (id) => {
    setTodoList((prevTodoList) => {
      const updatedTodos = prevTodoList.filter((todo) => todo.id !== id);
      return updatedTodos;
    });

    if (todoList.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todoList));
    } else if (todoList.length === 0) {
      localStorage.removeItem("todos");
    }
  };

  const callErrorModal = (err) => {
    setError({
      title: err.title,
      message: err.message,
    });
  };

  const closeErrorModal = () => {
    setDeleteError(null);
    setError(null);
  };

  const deleteTodosHandler = () => {
    setDeleteError(true);
    setError({
      title: "Important!",
      message: "If u agree, all your contacts will be delete!",
    });
  };
  
  const confirmDeleteError = () => {
    localStorage.removeItem("todos");
    setTodoList([]);
    closeErrorModal();
  }

  return (
    <div>
      <h1 className={styles.h1}>
        <img src={logo} alt="Logo from React" />
        The very simple Todo App
        <img src={logo} alt="Logo from React" />
      </h1>
      <AddTodo
        onAddTodo={addTodoHandler}
        todosAmount={todoList.length}
        onCallErrorModal={callErrorModal}
        onCloseErrorModal={closeErrorModal}
        onError={error}
        onDelete={deleteError}
        onConfirmDeleteError={confirmDeleteError}
        onDeleteTodos={deleteTodosHandler}
      />
      {todoList.length > 0 && (
        <h2 className={styles.h2}>Click on Todo to Delete</h2>
      )}
      {todoList.length > 0 && (
        <TodoList todoList={todoList} onDeleteTodo={deleteTodoHandler} />
      )}
    </div>
  );
}

export default App;
