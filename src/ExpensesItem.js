import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { useContext } from 'react';
import { AppContext } from './components/AppContext';

const ExpensesItem = ({ name, cost, id }) => {
  const { dispatch } = useContext(AppContext);

  const handleRemoveExpens = (id) => {
    dispatch({
      type: 'REMOVE',
      payload: id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div className="d-flex align-items-center">
        <span className="badge bg-secondary mr-3">{cost}zł</span>
        <TiDelete onClick={() => handleRemoveExpens(id)} size="1.5rem" />
      </div>
    </li>
  );
};

export default ExpensesItem;
