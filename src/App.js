import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './components/AppContext';
import Budget from './components/Budget';
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaning from './components/Remaning';

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3 text-center">Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaning />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpensesList />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
