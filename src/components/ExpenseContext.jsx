import  {createContext, useReducer} from "react";

const ExpenseReducer = (state, action)=>{
 switch(action.type){
    case 'ADDING ': 
    return{
        ...state,
        expenses: [...state. expenses, action.payload],
    };
    default:
        return state;
 }
}

const beginningState = {
    budget:5000,
    expenses:[ 
        {id:3, name:"groceries", cost:50},
        {id:4, name:"insurance", cost:200},
    ]
}

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
    const [state,dispatch] = useReducer(ExpenseReducer, beginningState);
    return(<ExpenseContext.Provider value={{
        budget:state.budget,
        expenses:state.expenses,
        dispatch,
    }}>
        {props.children}
    </ExpenseContext.Provider>)
}; 
