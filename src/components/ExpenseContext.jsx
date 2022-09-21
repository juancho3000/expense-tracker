import  {createContext, useReducer} from "react";

const ExpenseReducer = (state, action)=>{
 switch (action.type) {
    case 'ADDING': 
    return{
        ...state,
        // eslint-disable-next-line
        expenses: [...state. expenses, action.payload],
    };
    case 'DELETE_HISTORY': 
    return{
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload)
    }
    default:
        return state;
 }
};

const beginningState = {
    expenses: []
};

export const ExpenseContext = createContext(beginningState);

export const ExpenseProvider = ({children}) => {
    const [state,dispatch] = useReducer(ExpenseReducer, beginningState);

    function deleteExpenseHistory (id) {
        dispatch({
            type: 'DELETE_HISTORY',
            payload: id
        });
    }

    return(<ExpenseContext.Provider 
        value={{
        expenses:state.expenses,
        dispatch,
        deleteExpenseHistory
    }}>
        {children}
    </ExpenseContext.Provider>)
}; 
