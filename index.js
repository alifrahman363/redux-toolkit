const { createStore } = require('redux');

// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// state
const initialCounterState = {
    count: 0
};

const initialUserState = {
    users: [{ name: 'John' }]
};

// create action
// action - object - [type, payload]
const incrementCounter = () => {
    return {
        type: INCREMENT
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT
    };
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Jane' }
    };
}

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }

}

// create store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log('counter state', store.getState());
})

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());

// run node index.js to run this file


// 1. state
// 2. action dispatch
// 3. reducer - pure function
// 4. store - getState, dispatch, subscribe