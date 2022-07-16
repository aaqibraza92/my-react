import {GET_LOGIN,GET_LOGIN_SUCCESS,GET_LOGIN_FAILURE} from "./actionTypes";

let getLogindata=[];
const loggedInData=(state=getLogindata, {type, payload})=>{
    switch(type){
        case GET_LOGIN_SUCCESS:
            return payload
            default: 
            return state;
    }
}

export default loggedInData;