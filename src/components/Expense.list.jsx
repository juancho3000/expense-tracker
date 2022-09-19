import React from "react";
import { useContext } from "react";
import ExpenseItem from "./Expense.item";
import { ExpenseContext } from "./ExpenseContext";

const ExpenseList = () =>{
    const {expenses} = useContext(ExpenseContext) 
    console.log(expenses);
    return(
        <div>
            <h2 className="expense-history">History expense</h2> 
        <ul className="group-expenses">
            {expenses.map((expenses) =>(
               <ExpenseItem
               id={expenses.id}
               name={expenses.name}
               cost={expenses.cost}
               /> 
            ))}
        </ul>
        </div>
    )
}
export default ExpenseList;