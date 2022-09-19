import './App.css';
import Budget from './components/budget';
import Total from './components/total';
//import History from './components/history';
import { ExpenseProvider } from './components/ExpenseContext';
import ExpenseList from './components/Expense.list';
import TransactionForm from './components/transaction-form';


function App() {
  return (
    <ExpenseProvider>
       <div className="App">
        <h1>Expense tracker</h1>
        <div className='expense-row'>
        <Budget/>
        <Total/>
        <ExpenseList/>
        <TransactionForm/>
        </div> 
    </div>
    </ExpenseProvider>
  )
}

export default App;
