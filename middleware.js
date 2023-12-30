import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import * as thunk from 'redux-thunk';

const axios = require('axios'); // Import axios for making HTTP requests

// constants
const GET_TODO_REQUEST = 'GET_TODO_REQUEST';
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
const GET_TODO_FAILURE = 'GET_TODO_FAILURE';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// state
const initialTodoState = {
    todos: [],
    isLoading: false,
    error: null
};

// actions
const getTodoRequestAction = () => {
    return {
        type: GET_TODO_REQUEST
    };
};
const getTodoSuccessAction = (todos) => {
    return {
        type: GET_TODO_SUCCESS,
        payload: todos
    };
};
const getTodoFailureAction = (error) => {
    return {
        type: GET_TODO_FAILURE,
        payload: error
    };
};

// reducer
const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case GET_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

// async action creator
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodoRequestAction());
        axios.get(API_URL)
            .then((res) => {
                const todos = res.data;
                const titles = todos.map((todo) => todo.title);
                dispatch(getTodoSuccessAction(titles));
            })
            .catch((err) => {
                dispatch(getTodoFailureAction(err.message));
            });
    };
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk.default));

store.subscribe(() => {
    console.log(store.getState());
});

// thunk
store.dispatch(fetchData());
