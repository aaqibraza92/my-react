import React from "react";
import { useState } from "react";
import { notify } from "react-notify-toast";
import { useNavigate } from "react-router-dom";
import { Container, Label } from "reactstrap";
import { check } from "../../../helpers/backend";
import GButton from "../../Layout/GButton";
import GInput from "../../Layout/GInput";

let myColor = { background: "#ff385c", text: "#FFFFFF" };
const Verify = (props) => {
  const [verInput, setverInput] = useState("");

  const save = () => {
    const idata = {
      password: verInput,
    };
    if(verInput===""){
       return notify.show("Please insert password", "custom", 5000, myColor);
    }
    check(idata).then((res)=>{
        if(res && res.status===200){
            if(res && res.data && res.data.message==="Password match"){
                localStorage.setItem("isVerify", "pixx");
                window.location.reload();
                
            }
        }
    })
  };

  return (
    <div className="heightVh100 d-flex align-items-center">
      <Container>
        <Label>Enter Your Password to login</Label>
        <div className="mb15">
          <GInput
            type="password"
            onChange={(e) => setverInput(e.target.value)}
            placeholder="Enter Password"
          />
        </div>

        <GButton onClick={save}>Submit</GButton>
      </Container>
    </div>
  );
};

export default Verify;
