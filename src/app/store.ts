import { Ingredient } from './cart';

export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const REMOVE_ALL_CARTS = 'REMOVE_ALL_CARTS';
export const UPDATE_CART = 'UPDATE_CART';

export interface IAppState {
    cart: Ingredient[];
}
export const INITIAL_STATE: IAppState = {
    cart: []
}
export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case ADD_CART:  
            return Object.assign({}, state, {
                cart: state.cart.concat(Object.assign({}, action.cart)),
            })
        case REMOVE_CART:
            return Object.assign({}, state, {
                cart: state.cart.filter(t => t.name !== action.name),
            })
        case REMOVE_ALL_CARTS:
            return Object.assign({}, state, {
                cart: [],
            })
        case UPDATE_CART:
            var todo = state.cart.find(t => t.name === action.cart.name);
            var index = state.cart.indexOf(todo);
            return Object.assign({}, state, {
                cart: [
                    ...state.cart.slice(0, index),
                    Object.assign({}, todo, {requiredQty: todo.requiredQty +1}),
                    ...state.cart.slice(index+1)
                ],
            })
    }
    return state;
}