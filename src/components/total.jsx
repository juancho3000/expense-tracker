import React, { useState } from "react";

function Total () {
    const [todo, setTodo] = useState ([]);

    const addTodo = todo =>{
        
    }

    return(
        <div className="tracker-total">
            <section className="income-total">
                Total amount
            </section>
            <section className="expense-total">
                Expense amount
            </section>
        </div>
    )
}

export default Total;