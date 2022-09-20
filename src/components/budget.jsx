import React, {useContext} from "react";
import { ExpenseContext } from "./ExpenseContext";

const Budget = () => {
   
    const{expenses}= useContext(ExpenseContext);
    const amounts = expenses.map(expense=>expense.cost);
    const totalMoney = amounts.reduce((acc, item)=>(acc += item.cost),0).toFixed(2);
    console.log(totalMoney)
    
    return(
        <div className="expense-money">
            <h4>Your balance</h4>
            <h4> ${totalMoney}</h4>
        </div>
    )
}
export default Budget;