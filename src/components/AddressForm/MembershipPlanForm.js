import React, { useEffect, useState } from "react";
import { Col, Label } from "reactstrap";
import Auth from "../../helpers/Auth/Auth";
import axios from "axios";
import { API_URL2 } from "../../helpers/apiurls";

const MembershipPlanForm = (props) => {
  const [getmemberplanlist, setmemberplanList] = useState([]);

  useEffect(() => {
    getmemberplanAPI();
  }, []);

  const getmemberplanAPI = async (type) => {
    await axios({
      method: "get",
      url: `${API_URL2}/salon/membershipNameList`,
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
    }).then((response) => {
      let data1 = response.data.data;

      let result = data1?.map((o) => ({ value: o._id, label: o.planName }));

      setmemberplanList(result);
    });
  };

  return (
    <>
      <Col md={6}>
        <div className="select_border">
          <Label className="labelInput">
            Interested Membership Plan
            <span className="text-red"> * </span>
          </Label>
          <br />
          <select
            className="themeSelect selectbox"
            name="interestedmembershipid"
            onChange={(e) => {
              props.handleInputChange(e);
            }}
            value={props.dataState.interestedmembershipid}
          >
            <option value="">Select Membership Type</option>
            {getmemberplanlist &&
              getmemberplanlist.map((item, i) => (
                <option
                  key={item.value}
                  value={item.value}
                  selected={
                    props.dataState.interestedmembershipid === item.value
                      ? true
                      : false
                  }
                >
                  {item.label}
                </option>
              ))}
            ;
          </select>
          <div className="colorRed"> {props.errors.interestedmembershipid}</div>
        </div>
      </Col>
    </>
  );
};

export default MembershipPlanForm;
