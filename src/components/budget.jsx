import React, {useContext} from "react";
import { ExpenseContext } from "./ExpenseContext";

const Budget = () => {
   
    const{expenses}= useContext(ExpenseContext);
    const amounts = expenses.map(expenses=>expenses.cost);
    const totalMoney = amounts.reduce((acc, item)=>(acc += item.cost),0).toFixed(2);
    console.log(totalMoney)
    
    return(
        <div className="expense-money">
            <span>Your balance: ${totalMoney}</span>
        </div>
    )
}
export default Budget;