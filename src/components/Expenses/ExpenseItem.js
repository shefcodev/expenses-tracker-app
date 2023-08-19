import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const [getTitle, setTitle] = useState(title);

  const clickHandler = () => {
    setTitle("No Expense");
    console.log(getTitle);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{getTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick = {clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
