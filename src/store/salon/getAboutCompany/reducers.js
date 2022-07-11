import {GET_ABOUT_COMPANY,ABOUT_COMPANY_SUCCESS,ABOUT_COMPANY_FAILURE} from "./actionTypes";

let getAboutCompInfo=[];
const salonAboutCompRed=(state=getAboutCompInfo, {type, payload})=>{
    switch(type){
        case ABOUT_COMPANY_SUCCESS:
            return{
                getAboutCompInfo: payload,
            };
            default: 
            return state;
    }
}

export default salonAboutCompRed;