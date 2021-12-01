import { LOGIN_USER, REGISTER_USER } from "../types";
import axios from "axios"

export const loginUserAction = (data)=>async dispatch=>{
    dispatch({type:LOGIN_USER.REQUEST})
    try{
        const result = await axios.post("http://localhost:5000/users/login", data);
console.log(result);
        dispatch({
            type: LOGIN_USER.SUCCESS,
            user: result.data.user
        })
    }catch(e){
        console.log();
        dispatch({
            type: LOGIN_USER.ERROR,
            error:e.response.data.message
        })
    }
}

export const registerUserAction = (data)=>async dispatch=>{
    dispatch({type:REGISTER_USER.REQUEST})
    try{
        const result = await axios.post("http://localhost:5000/users/register", data);
        dispatch({
            type: REGISTER_USER.SUCCESS,
            user: result.data.user
        })
    }catch(e){
        dispatch({
            type: REGISTER_USER.ERROR,
            error:e.response.data.message
        })
    }
}

export const logoutAction =()=>dispatch=>{
    dispatch({type:"LOGOUT_USER"})
}