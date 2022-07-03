import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Auth from "../../../Helpers/Auth/Auth";

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    removeAllAuth();
  }, []);

  const removeAllAuth = () => {
    Auth.removeLoginAuth();
    Auth.removeToken();
    history.push("/login");
  };

  return <div></div>;
}
