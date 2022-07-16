import React, { useEffect } from 'react';
import Auth from '../../Helpers/Auth/Auth';
import GLocalStorage from '../../Helpers/Global/GLocalStorage';
import {Redirect} from 'react-router-dom';

const Logout = () => {
    useEffect(() => {
      Auth.removeToken();
      Auth.removeLoginAuth();
      GLocalStorage.Remove("user-role");
      GLocalStorage.Remove("user");
      
    }, []);
    return <Redirect to="/"/>
    //router 5 example
};

export default Logout;