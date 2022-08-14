import { Navigate } from "react-router-dom";
import Auth from "../../../Helpers/Auth/Auth";
import { userLogin } from "../../../Helpers/backend";
import {GET_LOGIN,GET_LOGIN_SUCCESS,GET_LOGIN_FAILURE} from "./actionTypes";

export const loginInfoRedux=(data,callback)=>{
    return(dispatch)=>{
        dispatch({
            type: GET_LOGIN
        });

        userLogin(data).then((res)=>{
            if(res && res.status===200){
                dispatch({
                    type: GET_LOGIN_SUCCESS,
                    payload: res.data
                })
                Auth.setToken(res.data.token);
                Auth.setRole(res.data.userType);
               // Navigate("/terms-conditions");
            }
            if(res && res.status===201){
                dispatch({
                    type: GET_LOGIN_FAILURE,
                    payload: res
                })
            }
            callback({status : res.status , message : res.message })
        })
    }
}

