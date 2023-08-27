import react from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ filteredExpenses }) => {
  return filteredExpenses.length ? (
    <ul className='expenses-list'>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  ) : (
    <h1 className='expenses-list__fallback'>No Expenses Found.</h1>
  );
};

export default ExpensesList;
