import React from 'react';
import ExpensesItem from '../ExpensesItem';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const ExpensesList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expens) => (
        <ExpensesItem id={expens.id} {...expens} />
      ))}
    </ul>
  );
};

export default ExpensesList;
