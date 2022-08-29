import React, { useState } from "react";
import TransactionForm from "./transaction-form";
//import Elimination from "./elimination";
//import TransactionForm from "./transaction-form";

function History () {
  const [lists, setLists] = useState([]);
  const [mistake, setMistake] = useState(false);

  const displayAlert = () => {
    const clockTime = setTimeout (() => setMistake(false),5000)
    return () => clearTimeout(clockTime);
  };

  const addingHistory = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        displayAlert();
        return;
    }
    const newEntry = [todo, ...lists];

    setLists(newEntry);
    console.log(todo, ...lists);
  };

  return(
    <div className="expense-history">
        <div className="beware" type="alert">
            {mistake && <p>You need to add an entry to the history</p>}
        </div>
        <TransactionForm onSubmit={addingHistory}/>
    </div>
  )
}

export default History;