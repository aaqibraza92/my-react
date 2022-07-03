import React, { useEffect, useState } from "react";
import { Col, Input, Label } from "reactstrap";
import GIconInput from "../Layout/GIconInput";
import Auth from "../../helpers/Auth/Auth";
import axios from "axios";
import { API_URL2 } from "../../helpers/apiurls";

const AddressForm = (props) => {
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  useEffect(() => {
    getCountryAPI();
  }, []);
  useEffect(() => {
    getStateListAPI(props.dataState.country);
    getCityListAPI();
  }, [props.dataState.country]);

  useEffect(() => {
    getCityListAPI(props.dataState.state);
  }, [props.dataState.state]);

  const getCountryAPI = async (type) => {
    await axios({
      method: "get",
      url: `${API_URL2}getCountryList`,
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
    }).then((response) => {
      let data1 = response.data.data;
      let result = data1?.map((o) => ({ value: o.country_id, label: o.name }));
      setCountryList(result);
    });
  };

  const getStateListAPI = async () => {
    await axios({
      method: "post",
      url: `${API_URL2}getStateList`,
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
      data: { country: props.dataState.country },
    }).then((response) => {
      let data2 = response.data.data;

      let result = data2.map((o) => ({
        value: o.country_id,
        label: o.name,
      }));

      setStateList(result);
    });
  };
  const getCityListAPI = async (type) => {
    await axios({
      method: "post",
      url: `${API_URL2}getCityList`,
      Accept: "application/json",
      Authorization: "Bearer " + Auth.getToken(),
      data: { state: props.dataState.state },
    }).then((response) => {
      let data2 = response.data.data;

      let result = data2.map((o) => ({
        value: o.country_id,
        label: o.name,
      }));

      setCityList(result);
    });
  };

  return (
    <>
      <Col md={props.col === 6 ? 6 : 3}>
        <div className="mb-3 select_border">
          <Label className="labelInput fs15 mb8">
            {" "}
            Country/Region <span className="text-danger">*</span>
          </Label>
          <br />
          <select
            className="themeSelect selectbox"
            {...props?.register("country", {
              required: true,
            })}
            onChange={(e) => props.handleInputChange(e)}
          >
            <option value="">Select Country</option>
            {countryList &&
              countryList.map((item, i) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            ;
          </select>

          <div className="colorRed">
            {props?.errors?.country ? (
              <>
                {props?.errors?.country?.type === "required" && (
                  <p className="redColor fs14 mt5">This is required.</p>
                )}
              </>
            ) : null}
          </div>
        </div>
      </Col>
      <Col md={props.col === 6 ? 6 : 3}>
        <div className="mb-3 select_border">
          <Label className="labelInput fs15 mb8">
            State/Provinces <span className="text-danger">*</span>
          </Label>
          <br />
          <select
            className="themeSelect selectbox"
            {...props?.register("state", {
              required: true,
            })}
            onChange={(e) => props?.handleInputChange(e)}
          >
            <option value="">Select State</option>
            {stateList &&
              stateList.map((item, i) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            ;
          </select>
          <div className="colorRed">
            {props?.errors?.state ? (
              <>
                {props?.errors?.state?.type === "required" && (
                  <p className="redColor fs14 mt5">This is required.</p>
                )}
              </>
            ) : null}
          </div>
        </div>
      </Col>
      <Col md={props.col === 6 ? 6 : 3}>
        <div className="mb-3 select_border">
          <Label className="labelInput fs15 mb8">
            City <span className="text-danger">*</span>
          </Label>
          <br />
          <select
            className="themeSelect selectbox"
            value={props.dataState.city}
            {...props.register("city", {
              required: true,
            })}
            onChange={(e) => props.handleInputChange(e)}
          >
            <option value="">Select City</option>
            {cityList &&
              cityList.map((item, i) => (
                <option key={item.label} value={item.label}>
                  {item.label}
                </option>
              ))}
            ;
          </select>
          <div className="colorRed">
            {props?.errors?.city ? (
              <>
                {props?.errors?.city?.type === "required" && (
                  <p className="redColor fs14 mt5">This is required.</p>
                )}
              </>
            ) : null}
          </div>
        </div>
      </Col>

      <Col md={props.col === 6 ? 6 : 3}>
        <Label className="labelInput fs15 mb8">Zip/Postal Code</Label>
        <Input
          label="Zip/Postal Code"
          placeholder="Enter code"
          type="number"
          className="inputStyle"
          name="postalCode"
          {...props.register("postalCode")}
          onChange={(e) => props.handleInputChange(e)}
        />
        {props?.errors?.postalCode && (
          <p className="redColor fs14 mt5">This is required.</p>
        )}
      </Col>
    </>
  );
};

export default AddressForm;
