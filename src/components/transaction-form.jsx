import React, {useContext,useState} from "react";
import { ExpenseContext } from "./ExpenseContext";
import { v4 as uuidv4 } from 'uuid';

const TransactionForm =()=> {
    const {dispatch} = useContext(ExpenseContext);
    const [isAmount, setIsAmount] = useState('');
    const [input, setInput] = useState('');
    
    //const inputCatch = useRef(null);
    //useEffect(()=>{
        //inputCatch.current.focus();
    //})

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( input + isAmount)
        //alert('name' + input + 'cost' + isAmount);

        const expense = {
            id: uuidv4(),
            name: input,
            cost: isAmount
        };
        dispatch({
            type: 'ADDING',
            payload: expense,
        });

        

       // props.onSubmit({
            //id:Math.floor(Math.random() * 1000),
            //text:input
        //});

        //setInput('');
    };


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