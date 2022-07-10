import React, { useEffect } from "react";
import styled from "styled-components";
import GInput from "./GInput";
import GPosition from "./GPosition";
import GSpacing from "./GSpacing";

// const GInput = styled.input`
//   background-color: ${(props) =>
//     props.backgroundColor ? props.backgroundColor : "#FFF"};
//   width: 100%;
//   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
//   padding: ${(props) => (props.padding ? props.padding : ".5rem .8rem")};
//   margin: ${(props) => (props.margin ? props.margin : "0rem")};
//   border-radius: ${(props) =>
//     props.borderRadius ? props.borderRadius : "3px"};
//   display: block;
//   border: 1px solid #e8e9e9;
//   outline: none;
//   color: ${(props) => (props.color ? props.color : "#000")};
//   flex-direction: ${(props) => (props.direction ? props.direction : "row")};
//   font-size: 17px;
//   min-width: 100px;
//   max-height: 45px;
//   -webkit-transition: all 0.2s linear 0s;
//   transition: all 0.2s linear 0s;
//   padding-left: ${(props) => (props.iconLeft ? '38px' : "10px")};

//   :focus {
//     background-color: ${(props) =>
//       props.hoverBgColor ? props.hoverBgColor : "#fff"};
//     border: 1px solid #47bbd0;
//   }
// `;

const GIconInput = (props) => {
  const onChange = (e) => {};
  const keyDown = (e) => {};
  const iconClick = (e) => {};

  useEffect(()=>{
    console.log("aaa",props);
  },[])

  return (
    <>
      <style jsx="true">{`
        .giconinput_absolute {
          position: absolute;
          height: 100%;
          display: flex;
          align-items: center;
          top: 0px;
          -webkit-transition: all 0.3s ease 0s;
          transition: all 0.3s ease 0s;
        }
        .giconinput_iconLeft {
          left: 10px;
        }
        .giconinput_absolute svg {
          width: 18px;
        }
        .giconinput_iconRight {
          right: 10px;
          cursor: pointer;
        }
        .giconinput_absolute:hover {
          opacity: 0.8;
        }
        .giconinput_subText {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
          padding-left: 10px;
        }
        .giconinput_sublabel {
          font-size: 12px;
          color: #5e77d9;
        }
        .giconinput_required {
          color: red;
          font-size: 14px;
        }
        .labelInput {
          font-size: 16px;
          margin-bottom: 4px;
        }
      `}</style>

      <GSpacing {...props}>
        {props.label && (
          <GPosition>
            <label htmlFor="" className="labelInput">
              {props.label}{" "}
              {props.required && <span className="giconinput_required">*</span>}{" "}
              {props.sublabel && (
                <span className="giconinput_sublabel">({props.sublabel})</span>
              )}
            </label>
          </GPosition>
        )}

        <GPosition>
          {props.iconLeft && (
            <span className="giconinput_iconLeft giconinput_absolute">
              {props.iconLeft}
            </span>
          )}
          <GInput
            type={props.type}
            className={props.className}
            id={props.id}
            value={props.value}
            placeholder={props.placeholder}
            iconLeft={props.iconLeft ? true : false}
            onChange={props.onChange || onChange}
            name={props.name}
            disabled={props.disabled}
            readOnly={props.readOnly}
            autoComplete={props.autoComplete || "Off"}
            onKeyDown={props.onKeyDown || keyDown}
          />
          {props.iconRight && (
            <span
              className="giconinput_iconRight giconinput_absolute"
              onClick={props.iconClick || iconClick}
            >
              {props.iconRight}
            </span>
          )}
        </GPosition>
        {props.subtitle && (
          <GPosition>
            <span className="giconinput_subText">Sub text</span>
          </GPosition>
        )}
      </GSpacing>
    </>
  );
};

export default GIconInput;
