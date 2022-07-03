import React, { useEffect } from "react";
import { Label } from "reactstrap";
import { GIconInputStyle } from "./GIconInputStyle";
import GInput from "./GInput";
import GPosition from "./GPosition";
import GSpacing from "./GSpacing";

const GIconInput = (props) => {
  const onChange = (e) => {};
  const keyDown = (e) => {};
  const iconClick = (e) => {};
  const onBlur = (e) => {};

  useEffect(() => {}, []);

  return (
    <>
      <GIconInputStyle />
      <GSpacing {...props}>
        {props.label && (
          <GPosition>
            <Label htmlFor="" className="labelInput">
              {props.label}{" "}
              {props.required && <span className="giconinput_required">*</span>}{" "}
              {props.sublabel && (
                <span className="giconinput_sublabel">({props.sublabel})</span>
              )}
            </Label>
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
            disabled={props.disabled }
            readOnly={props.readOnly}
            autoComplete={props.autoComplete || "Off"}
            onBlur={props.onBlur || onBlur}
            onKeyDown={props.onKeyDown || keyDown}
            onKeyUp={props.onKeyUp || keyDown}
            border={props.border}
            borderStyle={props.borderStyle}
            borderColor={props.borderColor}
            shadow={props.shadow}
          />
          {props.validationMsg && props.showvalidationMsg && (
            <p className="gpwd_val">{props.validationMsg}</p>
          )}
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
