import React from "react";
import ExpenseItem from "./Expense.item";

const ExpenseList = () =>{
    const expenses = [ 
        {id:1, item: "car expenses", cost: 100},
        {id:2, item: "medical checkings", cost: 200}
    ]
    return(
        <ul>
            {expenses.map((expenses) =>(
               <ExpenseItem
               id={expenses.id}
               name={expenses.item}
               cost={expenses.cost}
               /> 
            ))}
        </ul>
    )
}
export default ExpenseList;