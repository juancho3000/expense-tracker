import React, {useContext} from "react";
import { ExpenseContext } from "./ExpenseContext";

export const Budget = () => {
   
    const{ expenses }= useContext(ExpenseContext);
    const amounts = expenses.map(expense=>expense.cost);
    console.log(amounts);
    const totalMoney = amounts.reduce((acc, item) => (acc += item), 0);
    console.log(totalMoney)
    
    return(
        <div className="expense-money">
            <h1>Expense tracker app</h1>
            <h4>Your balance</h4>
            <h4>${totalMoney}</h4>
        </div>
    )
}
//export default Budget;