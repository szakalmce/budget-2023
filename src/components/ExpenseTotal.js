import React from 'react';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent: {totalExpenses}zł</span>
    </div>
  );
};

export default ExpenseTotal;
