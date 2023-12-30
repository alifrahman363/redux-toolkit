// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require('redux');
const ADD_USER = 'ADD_USER';

// initial state
const initialUserState = {
    users: [{ name: 'John' }],
    count: 1
}

// create action 
const addUserAction = (user) => {

    return {
        type: ADD_USER,
        payload: user
    }
}

// create reducer
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            return state;
    }
}

// Store
const store = createStore(userReducer);
store.subscribe(() => {
    console.log("Changing state: ", store.getState());
})
store.dispatch(addUserAction("Ashique"));