// state - count:0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';

// initial state
const initialState = {
    count: 0
}

// create action
const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

const resetAction = () => {
    return {
        type: RESET
    }
}

const incrementByValueAction = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
}


// create reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            state;
    }
}


// Store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log("Changing state: ", store.getState());
})

// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
store.dispatch(incrementByValueAction(10));
store.dispatch(incrementByValueAction(30));