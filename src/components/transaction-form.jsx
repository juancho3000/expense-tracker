import React, { useEffect,useRef,useState} from "react";
//import History from "./history";

function TransactionForm (props) {
    const [isAmount, setIsAmount] = useState('');
    const [input, setInput] = useState('');

    
    const inputCatch = useRef(null);
    // inputAmountCatch = useRef(null);

    useEffect(()=>{
        inputCatch.current.focus();
    })

    //useEffect(()=>{
        //inputAmountCatch.current.focus();
    //})

    //const handleChange = e =>{
        //setInput(e.target.value)
    //}

    //const handleAmount = e =>{
    //    setIsAmount(e.target.value)
    //}

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
        <div className="adding">Add a new transaction</div>
        <form className="expense-form" onSubmit={handleSubmit}>
            <section className="expense-text">
            <input
            type="text"
            placeholder="Enter text..."
            value={input}
            name="text"
            className="expense-input"
            onChange={(e) => setInput(e.target.value)}
            ref={inputCatch}
            />
            </section>

       <span></span>
        </form>
        <section> 
            <input
            type="text"
            placeholder="Enter amount..."
            value={isAmount}
            name="text"
            className="expense-amount"
            onChange={(e)=> setIsAmount(e.target.value)}
            
            
            />
            </section>
        <button className="expense-button">Add transaction</button>
    </div>
   )
}
export default TransactionForm;