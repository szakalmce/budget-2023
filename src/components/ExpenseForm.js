import React, { useContext, useState } from 'react';
import uuid from 'react-uuid';
import { AppContext } from './AppContext';

const ExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpens = {
      id: uuid(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD',
      payload: newExpens,
    });

    setName('');
    setCost(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <h1 className="mt-3">Expenses Form</h1>
        <div className="col-sm">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            className="form-control"
            id="name"
          />
        </div>
        <div className="col-sm">
          <input
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            type="number"
            required
            className="form-control"
            id="cost"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-2" type="submit">
        Add
      </button>
    </form>
  );
};

export default ExpenseForm;
