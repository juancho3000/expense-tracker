import React, {useContext} from "react";
import { ExpenseContext } from "./ExpenseContext";

const ExpenseItem = ({expense}) =>{

    const { deleteExpenseHistory } = useContext(ExpenseContext);

    const logicSigns = expense.cost < 0 ? '-' : '+';
    return(
        <li className={expense.cost < 0 ? 'minus' : 'plus'}>
            {expense.name}
            <div>
                <span className="group-list">
                    {logicSigns}${Math.abs(expense.cost)}
                </span>
                
            </div>
            <button className="delete-expense" onClick={()=> deleteExpenseHistory(expense.id)}>X</button>
        </li>
    )
}

export default ExpenseItem;