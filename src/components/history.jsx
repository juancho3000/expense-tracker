import React, { useState } from "react";
import Elimination from "./elimination";


//import { emitter } from "./mensaje";
import TransactionForm from "./transaction-form";

function History () {
  const [lists, setLists] = useState([]);

  const addingHistory = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        
        return;
    }
    const newEntry = [todo, ...lists];
    //emitter.emit("NOTIFICATION", `"${todo.text}"has been added`)
    setLists(newEntry);
    console.log(todo, ...lists);
  };

  const removeList = id => {
    const removeArr = [...lists].filter(todo => todo.id !== id)
    setLists(removeArr);
  }

  const completeList = id => {
    let updateList = lists.map(todo =>{
        if(todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setLists(updateList)
  }

  return(
    <div className="expense-history">
        <div className="beware" type="alert">
            
        </div>
        <div className="comp-cloud">
        
        <TransactionForm onSubmit={addingHistory}/>
        <Elimination lists={lists} 
        completeList={completeList} 
        removeList={removeList}/>
        
        </div>
    </div>
  )
}

export default History;