//reducer deals with a state change (differently) in response to different actions
//reducer passed to AppReducer in GlobalState.js which is passed to useReducer through which we can access state
//initial state values of transactions are accessed at first which are then
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                    action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
