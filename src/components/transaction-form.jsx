import React, {useContext,useState} from "react";
import { ExpenseContext } from "./ExpenseContext";
import { v4 as uuidv4 } from 'uuid';

const TransactionForm =()=> {
    const {dispatch} = useContext(ExpenseContext);
    const [isAmount, setIsAmount] = useState('');
    const [input, setInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( input + isAmount)
       
        const newExpense = {
            id: uuidv4(),
            name: input,
            cost: parseInt(isAmount)
        };
        dispatch({
            type: 'ADDING',
            payload: newExpense,
        });
        dispatch(newExpense)
    }


   return(
    <div className="expense-enter">
        <h3 className="adding">Add a new transaction</h3>
        <form className="expense-form" onSubmit={handleSubmit}>
            <div className="expense-definition">
            <label className="text-label" htmlFor="text">Text</label>
            <input
            type="text"
            placeholder="Enter text..."
            value={input}
            required="requiered"
            className="expense-input"
            onChange={(e) => setInput(e.target.value)}
            
            />
            </div>

            <div className="expense-numbers">
            <label className="amount-label" htmlFor="text">Amount <br/>(negative - expense, positive - income)</label>
            <input
            type="text"
            placeholder="Enter amount..."
            value={isAmount}
            required="requiered"
            className="expense-amount"
            onChange={(e)=> setIsAmount(e.target.value)}
            />
            </div>
            <button  type="submit" className="expense-button" >Add transaction</button>
        </form>
        
    </div>
   )
}
export default TransactionForm;