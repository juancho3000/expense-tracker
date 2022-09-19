import React, {useContext} from "react";
import { ExpenseContext } from "./ExpenseContext";

const Budget = () => {
   
    const{expenses}= useContext(ExpenseContext);
    const amounts = expenses.map(expenses=>expenses.cost);
    const totalMoney = amounts.reduce((total, item)=>(total += item.cost),).toFixed(2);
    
    return(
        <div className="expense-money">
            <span>Budget: ${totalMoney}</span>
        </div>
    )
}
export default Budget;