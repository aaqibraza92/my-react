import React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: block;
  display: ${(props) => {
    return props.display ? props.display : "inline-block";
  }};
  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
  }
  input:checked + label::before {
    background-color: #47bbd0;
  }
  input:checked + label:after {
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    left: 7px;
    width: 5px;
    height: 12px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  label {
    position: relative;
    cursor: pointer;
  }
  label::before {
    content: "";
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #47bbd0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 7px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 6px;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    top: -1px;
    margin-right: 10px;
  }
`;

const GCheckbox = (props) => {
  const onChange = (e) => {};

  return (
    <CheckboxWrapper>
      <input
        name={props.name}
        checked={props.checked}
        className={props.className}
        type="checkbox"
        id={props.id}
        onChange={props.onChange || onChange}
      />
      <label className="f16" htmlFor={props.id}>
        {props.label}
      </label>
    </CheckboxWrapper>
  );
};

export default GCheckbox;
