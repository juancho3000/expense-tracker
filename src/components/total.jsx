import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

const Total = () =>{

 const {expenses} = useContext(ExpenseContext);
const amounts = expenses.map(expense=>expense.cost);

const calcIncome = amounts
    .filter(item => item > 0)
    .reduce((total, item) => (total += item.cost),0)
    .toFixed(2);
console.log(calcIncome)

const calcExpense = (
    amounts.filter(item => item < 0).reduce((total, item) => (total += item.cost), 0) * -1
    ).toFixed(2);
    console.log(calcExpense)

    return(
        <div className="tracker-total">
            <section className="income-total">
               <h3>Income</h3>
               <p id="money-positive" class="gain">${calcIncome}</p>
            </section>
            <section className="expense-total">
                <h3>Expense</h3>
                <p id="money-negative" class="loss">${calcExpense}</p>
            </section>
        </div>
    )
}

export default Total;