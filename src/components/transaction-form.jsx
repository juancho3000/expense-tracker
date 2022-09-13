import React, {useContext,useState} from "react";
import { ExpenseContext } from "./ExpenseContext";
import { v4 as uuidv4 } from 'uuid';

function TransactionForm (props) {
    const {dispatch} = useContext(ExpenseContext);
    const [isAmount, setIsAmount] = useState('');
    const [input, setInput] = useState('');
    
    //const inputCatch = useRef(null);
    //useEffect(()=>{
        //inputCatch.current.focus();
    //})

    

    const handleSubmit = e => {
        e.preventDefault();
        const moneyAdded = {
            id: uuidv4(),
            name: input,
            amount: parseInt(isAmount)
        };
        dispatch({
            type: 'ADDING',
            payload: moneyAdded,
        });
        

        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text:input
        });

        setInput('');
    };


   return(
    <div className="expense-enter">
        <h3 className="adding">Add a new transaction</h3>
        <form className="expense-form" onSubmit={handleSubmit}>
            <div className="expense-definition">
            <label htmlFor="text">Text</label>
            <input
            type="text"
            placeholder="Enter text..."
            value={input}
            name="text"
            className="expense-input"
            onChange={(e) => setInput(e.target.value)}
            
            />
            </div>

            <div className="expense-numbers">
            <label htmlFor="text">Amount <br/>(negative - expense, positive - income)</label>
            <input
            type="text"
            placeholder="Enter amount..."
            value={isAmount}
            name="text"
            className="expense-amount"
            onChange={(e)=> setIsAmount(e.target.value)}
            />
            </div>
        </form>
        
        <button className="expense-button" onClick={handleSubmit}>Add transaction</button>
    </div>
   )
}
export default TransactionForm;