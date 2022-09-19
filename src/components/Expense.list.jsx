import React from "react";
import { useContext } from "react";
import ExpenseItem from "./Expense.item";
import { ExpenseContext } from "./ExpenseContext";

const ExpenseList = () =>{
    const {expenses} = useContext(ExpenseContext) 
    return(
        <ul className="group-expenses">
            {expenses.map((expenses) =>(
               <ExpenseItem
               id={expenses.id}
               name={expenses.name}
               cost={expenses.cost}
               /> 
            ))}
        </ul>
    )
}
export default ExpenseList;