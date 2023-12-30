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

// 1. state
// 2. action dispatch
// 3. reducer - pure function
// 4. store - subscribe, getState, dispatch