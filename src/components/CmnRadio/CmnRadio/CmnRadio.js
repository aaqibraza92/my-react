import React from "react";
import { CmnRadioStyle } from "./CmnRadioStyle";

const CmnRadio = (props) => {
  return (
    <>
    <CmnRadioStyle/>
    <div className="cmnRadioOnly">
      <input
        type="radio"
        id={props.id}
        name={props.name}
        className={props.className}
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
        />
      <Label htmlFor={props.id}>{props.label}</Label>
    </div>
        </>
  );
};

export default CmnRadio;
