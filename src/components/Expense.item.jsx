import React from "react";
//import {TiDelete} from 'react-icons/ti';

const ExpenseItem = ({expense}) =>{
    const logicSigns = expense.cost < 0 ? '-' : '+';
    return(
        <li className={expense.cost < 0 ? 'minus' : 'plus'}>
            {expense.name}
            <div>
                <span className="group-list">
                    {logicSigns}${Math.abs(expense.cost)}
                </span>
                <button className="delete-expense">X</button>
            </div>
        </li>
    )
}

export default ExpenseItem;