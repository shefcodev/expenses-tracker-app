import react from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filteredExpenses }) => {
  return filteredExpenses.length ? (
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  ) : (
    <p>No Expenses Found.</p>
  );
};

export default ExpensesList;
