import { CART } from "../types"


export const addToCart=(item)=>dispatch=>{
    dispatch({
        type: CART.ADD,
        item
    })
}

export const removeCart=(id)=>dispatch=>{
    dispatch({
        type: CART.REMOVE,
        id
    })
}

export const clearCart=()=>dispatch=>{
    dispatch({
        type: CART.CLEAR
    })
}

export const incrementCart=(id)=>dispatch=>{
    dispatch({
        type: CART.INCREMENT,
        id
    })
}

export const decrementCart=(id)=>dispatch=>{
    dispatch({
        type: CART.DECREMENT,
        id
    })
}