import React from "react";

import Card from "../Card/Card";
import Button from "../Button/Button";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
      <Card className={styles.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          {props.onDelete ? (
            <Button onClick={props.onConfirmDeleteError}>Okay</Button>
          ) : (
            <Button onClick={props.onConfirm}>Okay</Button>
          )}
          {props.onDelete && <Button onClick={props.onConfirm}>Cancel</Button>}
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
