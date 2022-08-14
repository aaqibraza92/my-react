import React, { useEffect } from 'react';
import Auth from '../../Helpers/Auth/Auth';
import GLocalStorage from '../../Helpers/Global/GLocalStorage';
import { Navigate, } from "react-router-dom";

const Logout = () => {
    useEffect(() => {
      Auth.removeToken();
      Auth.removeLoginAuth();
      GLocalStorage.Remove("user-role");
      GLocalStorage.Remove("user");
      GLocalStorage.Remove("userRole");
      
    }, []);
    return <Navigate to="/"/>
    //router 5 example
};

export default Logout;