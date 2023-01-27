import React, { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");

  const todoChangeHandler = (event) => setEnteredTodo(event.target.value);

  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  const timeChangeHandler = (event) => setEnteredTime(event.target.value);

  const addTodoHandler = (event) => {
    event.preventDefault();
    // console.log({
    //   id: `todo_${props.todosAmount}`,
    //   todo: todo,
    //   date: date,
    //   time: time,
    // });

    const todo = {
      id: `todo-${props.todosAmount + 1}`,
      todo: enteredTodo,
      date: enteredDate,
      time: enteredTime,
    };
    props.onAddTodo(todo);

    setEnteredTodo("");
    setEnteredDate("");
    setEnteredTime("");
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
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
        <label htmlFor="time">Time</label>
        <input
          id="time"
          type="time"
          value={enteredTime}
          onChange={timeChangeHandler}
        />
        <div className={styles.actions}>
          <Button type="submit">Add Todo</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddTodo;
