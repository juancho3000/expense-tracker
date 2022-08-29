import React, { useState } from "react";
import Elimination from "./elimination";
import Mensaje from "./mensaje";
import { emitter } from "./mensaje";
import TransactionForm from "./transaction-form";

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
    emitter.emit("NOTIFICATION", `"${todo.text}"has been added`)
    setLists(newEntry);
    console.log(todo, ...lists);
  };

  const removeList= id => {
    const removeArr = [...lists].filter(todo => todo.id !== id)
    setLists(removeArr);
  };

  const completeList = id => {
    let updateList = lists.map(todo => {
        if(todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo;
    });
    setLists(updateList);
  };

  return(
    <div className="expense-history">
        <div className="beware" type="alert">
            {mistake && <p>You need to add an entry to the history</p>}
        </div>
        <div className="comp-cloud"> 
        <Mensaje/>
        <TransactionForm onSubmit={addingHistory}/>
        <Elimination lists={lists}
        completeList={completeList}
        removeList={removeList}/>
        </div>
    </div>
  )
}

export default History;