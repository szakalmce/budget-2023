import { createContext, useContext, useReducer } from 'react';

const initialState = {
  budget: 2000,
  expenses: [
    { id: 0, name: 'shopping', cost: 20 },
    { id: 1, name: 'coffee', cost: 10 },
  ],
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const appReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      case 'REMOVE':
        return {
          ...state,
          expenses: state.expenses.filter(
            (expens) => expens.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
