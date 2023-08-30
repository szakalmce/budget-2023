import React from 'react';
import { useContext } from 'react';

import { AppContext } from './AppContext';

const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    <div className="alert alert-secondary">
      <span>Budget: {budget}zł</span>
    </div>
  );
};

export default Budget;
