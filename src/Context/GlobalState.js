import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
    ]
}
//create global context
//use it in other files into components where we need it
export const GlobalContext = createContext(initialState);

//provider component, wrapping all the component so sending them as children
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions which will provoke reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }); 
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        }); 
    }

    return(<GlobalContext.Provider value ={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    );
} 