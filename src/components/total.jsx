import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

const Total = () =>{

 const {expenses, budget} = useContext(ExpenseContext);
 
 const CalcExpenses = expenses.reduce((total, item)=>{
    return (total + item.cost);
 },0);

    return(
        <div className="tracker-total">
            <section className="income-total">
               <h3>Money left</h3>
               <p id="money-positive" class="gain">${budget-CalcExpenses}</p>
            </section>
            <section className="expense-total">
                <h3>Money expent</h3>
                <p id="money-negative" class="loss">$600</p>
            </section>
        </div>
    )
}

export default Total;