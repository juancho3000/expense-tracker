import React, {useContext} from "react";
import { ExpenseContext } from "./ExpenseContext";

const Budget = () => {
    const{budget} = useContext(ExpenseContext)
    return(
        <div className="expense-money">
            <span>Budget: ${budget}</span>
        </div>
    )
}
export default Budget;