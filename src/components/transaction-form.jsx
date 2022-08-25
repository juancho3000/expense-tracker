import React, {useState} from "react";

function TransactionForm () {
    const [input, setInput] = useState('');

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

   return(
    <div>
        <form className="expense-form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter text..."
            value={input}
            name="text"
            className="expense-input"
            onChange={handleChange}
            />
            <button className="expense-button">Add transaction</button>
        </form>
    </div>
   )
}

export default TransactionForm;