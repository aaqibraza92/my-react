import React, { useEffect } from "react";
import { Col, Label, Row } from "reactstrap";
import { GCommonStyle } from "./GCommonStyle";
import GInput from "./GInput";
import GPosition from "./GPosition";

const GHorizontalInput = (props) => {
  const onChange = (e) => {};
  const keyDown = (e) => {};
  const iconClick = (e) => {};

  useEffect(() => {}, []);

  return (
    <>
      <GCommonStyle />
      {props.label && (
        <GPosition>
          <Row className="align-items-center">
            <Col md={4} className="text-end">
              <Label htmlFor="" className="labelInput">
                {props.label}
                {props.required && (
                  <span className="giconinput_required">*</span>
                )}
                {props.sublabel && (
                  <span className="giconinput_sublabel">
                    ({props.sublabel})
                  </span>
                )}
              </Label>
            </Col>
            <Col md={8}>
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
                  value={props.value || ""}
                  placeholder={props.placeholder}
                  iconLeft={props.iconLeft ? true : false}
                  onChange={props.onChange || onChange}
                  name={props.name}
                  disabled={props.disabled}
                  readOnly={props.readOnly}
                  autoComplete={props.autoComplete || "Off"}
                  onKeyDown={props.onKeyDown || keyDown}
                  onKeyUp={props.onKeyUp || keyDown}
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
            </Col>
          </Row>
        </GPosition>
      )}
    </>
  );
};

export default GHorizontalInput;
