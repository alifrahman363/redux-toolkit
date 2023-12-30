const { createStore, combineReducers } = require('redux');

// product constants
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

// cart constants
const ADD_TO_CART = 'ADD_TO_CART';
const GET_CART = 'GET_CART';

// product states
const initialProductState = {
    products: ["suger", "rice"],
    numberOfProducts: 2
};


// cart states
const initialCartState = {
    cart: ["sugar"],
    numberOfProducts: 1
}

// product actions
const getProductAction = () => {
    return {
        type: GET_PRODUCT
    }
}

const addProductAction = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

// cart actions
const getCartAction = () => {
    return {
        type: GET_CART
    }
}

const addToCartAction = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}


// product reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

// cart reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            }
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }

}

const rootReducer = combineReducers({
    productReducer: productReducer,
    cartReducer: cartReducer
})

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log("this is cart state: ", store.getState());
})

store.dispatch(getProductAction());
store.dispatch(addProductAction("milk"));
store.dispatch(getCartAction());
store.dispatch(addToCartAction("milk"));
