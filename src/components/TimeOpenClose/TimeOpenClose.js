import React from "react";
import "rc-time-picker/assets/index.css";
import TimePicker from "rc-time-picker";
import moment from "moment";

const TimeOpenClose = (props) => {
  const format = "HH:mm";
  function onChange(value) {
  }

  return (
    <div className="openhours">
      <div className="openfirst">
        <span>Monday</span>
      </div>
      <div className="opensecond">
        <Label htmlFor="" className="switch">
          <input type="checkbox" checked={props.checked} />
          <span className="slider round"></span>
        </Label>
        <span className="ml10">Closed</span>
      </div>
      <div className="openthird">
        <div className="time_picker">
          <TimePicker
            showSecond={false}
            defaultValue="10:02"
            className="xxx"
            onChange={onChange}
            format={format}
          />
        </div>
      </div>
      <div className="openfourth">
        <span>To</span>
      </div>

      <div className="openfive">
        <div className="time_picker">
          <TimePicker
            showSecond={false}
            defaultValue=""
            className="xxx"
            onChange={onChange}
            format={format}
            placeholder="Enter Time"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeOpenClose;
