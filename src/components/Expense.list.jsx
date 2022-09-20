import React from "react";
import { useContext } from "react";
import ExpenseItem from "./Expense.item";
import { ExpenseContext } from "./ExpenseContext";

const ExpenseList = () =>{
    const {expenses} = useContext(ExpenseContext) 
    console.log(expenses);
    return(
        <div>
            <h3 className="expense-history">History</h3> 
        <ul className="group-expenses">
            {expenses.map(expense=>(<ExpenseItem key={expense.id} expense={expense}/>))}
        </ul>
        </div>
    )
}
export default ExpenseList;