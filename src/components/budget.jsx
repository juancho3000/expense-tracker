import React, {useContext} from "react";
import { ExpenseContext } from "./ExpenseContext";

export const Budget = () => {
   
    const{ expenses }= useContext(ExpenseContext);
    const amounts = expenses.map(expense=>expense.cost);
    console.log(amounts);
    const totalMoney = amounts.reduce((total, item)=>(total += item.cost),0).toFixed(2);
    console.log(totalMoney)
    
    return(
        <div className="expense-money">
            <h4>Your balance</h4>
            <h4>${totalMoney}</h4>
        </div>
    )
}
//export default Budget;