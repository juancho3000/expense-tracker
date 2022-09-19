import React from "react";
//import {TiDelete} from 'react-icons/ti';

const ExpenseItem = (props) =>{
    const logicSigns = props.cost < 0 ? '-' : '+';
    return(
        <li className="list-expense">
            {props.name}
            <div>
                <span className="group-list">
                    {logicSigns}${Math.abs(props.cost)}
                </span>
                <button className="delete-expense">X</button>
            </div>
        </li>
    )
}

export default ExpenseItem;