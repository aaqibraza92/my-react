import { combineReducers } from "redux";

import salonAboutCompRed from "./salon/getAboutCompany/reducers"
import loggedInData from "./authentication/login/reducers"

const rootReducer=combineReducers({
    salonAboutCompRed,
    loggedInData
});

export default rootReducer;