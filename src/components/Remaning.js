import React from 'react';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const Remaning = () => {
  const { budget, expenses } = useContext(AppContext);

  const spentTotal = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertColor = spentTotal >= budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertColor}`}>
      <span>Remaining: {budget - spentTotal}zł</span>
    </div>
  );
};

export default Remaning;
