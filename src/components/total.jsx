import React from "react";

const Total = () =>{
    

    return(
        <div className="tracker-total">
            <section className="income-total">
               <h3>Total amount</h3>
               <p id="money-positive" class="gain">$2.000</p>
            </section>
            <section className="expense-total">
                <h3>Expense amount</h3>
                <p id="money-negative" class="loss">$600</p>
            </section>
        </div>
    )
}

export default Total;