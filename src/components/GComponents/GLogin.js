import React from "react";
import { useState } from "react";
import styled from "styled-components";
import GCheckbox from "./GCheckbox";
import GIconInput from "./GIconInput";
import GAlign from "./GAlign";
import GLink from "./GLink";
import GPasswordInput from "./GPasswordInput";
import GButton from "./GButton";
import GSpacing from "./GSpacing";
import { userLogin } from "../../ApiHelpers/ApiMethod/ApiMethod";

const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;

const GLogin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [myname, setmyname] = useState("");

  const onSubmit = () => {
    const iData = {
      username: email,
      password: password,
    };
    userLogin(iData).then((res)=>{
      console.log(res);
      localStorage.setItem("myToken",res.data.token);
    });
  };

  const locally=()=>{
    localStorage.setItem("aaqikey","My name is aaqib raza qadri");
    var keyname=localStorage.getItem("aaqikey");
    localStorage.removeItem("aaqikey");
    setmyname(keyname);
  }

  return (
    <LoginWrapper>

      <button onClick={locally}>
        Local
      </button>
      <h1>{myname}</h1>
      <h3>Log In Account</h3>
      <GIconInput
        label="Email/mobile number *"
        type="email"
        name="email"
        placeholder="Enter email or Mobile number"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />

      <GPasswordInput
        label="Password"
        name="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setpassword(e.target.value)}
      />

      <GSpacing marginTop="10px" marginBottom="10px">
        <GAlign align="between">
          <div>
            <GCheckbox name="remember" id="remember" label="Remember me" />
          </div>
          <div>
            <GLink to="#" text="Forgot Password" />
          </div>
        </GAlign>
      </GSpacing>

      <GButton onClick={onSubmit} width="100%">Log In</GButton>
    </LoginWrapper>
  );
};

export default GLogin;
