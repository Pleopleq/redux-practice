import { createStore } from 'redux'
import { ADD_TO_CART } from './actions'

const initialStore = {
    cart: []
}

const rootReducer = (state = initialStore, {type, id }) => {
    if(type === ADD_TO_CART){

        if(state.cart.find(a => a === id)) return state

        return {
            ...state,
            cart: state.cart.concat(id)
        }
    }

    return state
}

export default createStore(rootReducer)