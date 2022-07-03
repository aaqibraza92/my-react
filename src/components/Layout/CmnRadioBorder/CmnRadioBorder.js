import React from "react";
import { Label } from "reactstrap";
import { CmnRadioBorderStyle } from "./CmnRadioBorderStyle";

const CmnRadioBorder = (props) => {
  return (
    <>
    <CmnRadioBorderStyle/>
    <div className="cmnRadioBorder mb12">
      <input
        type="radio"
        id={props.id}
        data-id={props.questionDataid}
        value={props.value}
        name={props.name}
        className={props.className}
        checked={props.checked}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
        
      />
      <Label htmlFor={props.id} className="bRadio fs14">{props.label}</Label>
    </div>
    </>
  );
};

export default CmnRadioBorder;
