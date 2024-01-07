import './App.css';
import {Budget} from './components/budget';
import Total from './components/total';
//import History from './components/history';
import { ExpenseProvider } from './components/ExpenseContext';
import ExpenseList from './components/Expense.list';
import TransactionForm from './components/transaction-form';

function App() {
  return (
    <div id='expense-container'>
        <ExpenseProvider>
        <Budget/>
        <Total/>
        <ExpenseList/>
        <TransactionForm/>
    </ExpenseProvider>
    </div>
 )
}

export default App;
