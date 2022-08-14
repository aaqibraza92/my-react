import React from "react";
import {useNavigate} from 'react-router-dom';
import GButton from "../../Components/GComponents/GButton";

export default function Unauthorized() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{height : "90vh"}} className="w-100 d-flex justify-content-center flex-column align-items-center">
        <h1>404 Unauthorized Access</h1>
        <br />
        <p>You are not authorised to view this page.</p>
        <div><GButton onClick={e => {navigate.goBack()}}>Go Back</GButton></div>
      </div>
    </>
  );
}
