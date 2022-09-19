import  {createContext, useReducer} from "react";

const ExpenseReducer = (state, action)=>{
 switch (action.type) {
    case 'ADDING': 
    return{
        ...state,
        // eslint-disable-next-line
        expenses: [...state. expenses, action.payload],
    };
    default:
        return state;
 }
};

const beginningState = {
    
    expenses: [ 
    
    ],
};

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
    const [state,dispatch] = useReducer(ExpenseReducer, beginningState);
    return(<ExpenseContext.Provider 
        value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
    }}>
        {props.children}
    </ExpenseContext.Provider>)
}; 
