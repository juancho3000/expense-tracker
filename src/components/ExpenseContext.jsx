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
       // {id: 1, name:'income', cost:'1000'},
        //{id: 2, name:'expenses', cost:'-500'}
    ]
};

export const ExpenseContext = createContext(beginningState);

export const ExpenseProvider = ({children}) => {
    const [state,dispatch] = useReducer(ExpenseReducer, beginningState);
    return(<ExpenseContext.Provider 
        value={{
        expenses:state.expenses,
        dispatch,
    }}>
        {children}
    </ExpenseContext.Provider>)
}; 
