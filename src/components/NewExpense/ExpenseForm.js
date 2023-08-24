import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   newTitle: "",
  //   newAmount: "",
  //   newDate: ""
  // });

  const titleChangeHandler = ({ target }) => {
    setNewTitle(target.value);
    console.log(newTitle);

    // setUserInput({
    //   ...userInput,
    //   newTitle: target.value,
    // });

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     newTitle: target.value,
    //   }
    // });
  };

  const amountChangeHandler = ({ target }) => {
    setNewAmount(target.value);
    console.log(newAmount);

    // setUserInput({
    //   ...userInput,
    //   newAmount: target.value,
    // });
  };

  const dateChangeHandler = ({ target }) => {
    setNewDate(target.value);
    console.log(newDate);

    // setUserInput({
    //   ...userInput,
    //   newDate: target.value,
    // });
  };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setNewTitle(value);
  //     console.log(newTitle)
  //   } else if (identifier === "amount") {
  //     setNewAmount(value);
  //   } else {
  //     setNewDate(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    onSaveExpenseData(expenseData);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={newTitle} 
            onChange={titleChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
