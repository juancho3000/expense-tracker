import React from "react";
import {TiDelete} from 'react-icons/ti';

const ExpenseItem = (props) =>{
    return(
        <li className="list-expense">
            {props.name}
            <div>
                <span className="group-list">
                    ${props.cost}
                    <TiDelete/>

                </span>
            </div>
        </li>
    )
}
export default ExpenseItem;