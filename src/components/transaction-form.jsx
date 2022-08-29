import React, {useEffect, useRef, useState} from "react";

function TransactionForm (props) {
    const [input, setInput] = useState('');
    const inputCatch = useRef(null);

    useEffect(()=>{
        inputCatch.current.focus();
    })

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text:input
        });
        setInput('');
    };

   return(
    <div className="expense-enter">
        <form className="expense-form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter text..."
            value={input}
            name="text"
            className="expense-input"
            onChange={handleChange}
            ref={inputCatch}
            />
       <span></span>
        </form>
        <button className="expense-button">Add transaction</button>
    </div>
   )
}

export default TransactionForm;