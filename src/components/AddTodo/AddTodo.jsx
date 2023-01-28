import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const setISODateTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let day = ("0" + now.getDate()).slice(-2);
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [enteredTodo, setEnteredTodo] = useState("");
  const [enteredDateTime, setEnteredDateTime] = useState(setISODateTime);

  const todoChangeHandler = (event) => setEnteredTodo(event.target.value);

  const dateTimeChangeHandler = (event) =>
    setEnteredDateTime(event.target.value);

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (enteredTodo.length < 3) {
      console.error("TODO ERROR");
      return;
    }
    if (new Date(enteredDateTime).getTime() + 100000 < Date.now()) {
      console.error("DATE ERROR");
      return;
    }

    const todo = {
      id: Math.random(),
      todo: enteredTodo,
      date: enteredDateTime,
    };

    props.onAddTodo(todo);

    setEnteredTodo("");
    setEnteredDateTime(setISODateTime);
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={addTodoHandler}>
        <label htmlFor="todo">Todo</label>
        <input
          id="todo"
          type="text"
          value={enteredTodo}
          placeholder="Type your todo..."
          onChange={todoChangeHandler}
        />
        <label htmlFor="date">Date/Time</label>
        <input type="hidden" id="timezone" name="timezone" value="+01:00" />
        <input
          id="date"
          type="datetime-local"
          value={enteredDateTime}
          onChange={dateTimeChangeHandler}
        />
        <div className={styles.actions}>
          <Button type="submit">Add Todo</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddTodo;
