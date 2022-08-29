import React, { useState } from "react";
import TransactionForm from "./transaction-form";

function Elimination ({ lists, completeList, removeList, updateList}) {
    const [edit, setEdit] = useState({
        id:null,
        value:''
    });
    const submitUpdate = value => {
        updateList(edit.id,value)
        setEdit({
            id:null,
            value:''
        });
    };
    if(edit.id){
        return <TransactionForm edit={edit} onsubmit={submitUpdate}/>;
    }
    return lists.map((todo,index) => (
        <form className={todo.isComplete ? "todo-row" : "todo-row"}
         key={index}>
            <div className="ecrito" 
            key={todo.id}
            onClick={()=>
            completeList(todo.id)}>
                {todo.text}
            </div>
            <button type="button"
            className="remove-button"
            onClick={()=>
            removeList(todo.id)}>Remove entry</button>
        </form>
    ))
}
export default Elimination;