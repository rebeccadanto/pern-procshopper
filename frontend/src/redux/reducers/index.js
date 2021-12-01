import {combineReducers} from 'redux'
import usersReducer from './users'
import cartReducer from './cart'

const rootReducer = combineReducers({
    users: usersReducer,
    cart: cartReducer
})

export default rootReducer;