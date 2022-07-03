import React from 'react'
import { useState ,useEffect} from "react";
import styled from "styled-components";
import { Col,Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import GIconInput from "../Layout/GIconInput";
import GPasswordInput from "../Layout/GPasswordInput";
import GSpacing from "../Layout/GSpacing";
import GAlign from "../Layout/GAlign";
import GButton from "../Layout/GButton";
import GCheckbox from "../Layout/GCheckbox";
import GLink from "../Layout/GLink";
import { notify } from "react-notify-toast";
import { postAuthLogin } from "../../store/auth/login/actions";
import { useNavigate,  useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
const LoginWrapper = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 17px;
  }
`;
const LoginAction = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState( props.state || { userid: "", password: "",rememberMe: false } );
  const [errors, seterrors] = useState({});
  const location = useLocation();

  const callback = async(resp) => {
    if(resp && resp.status && resp.status===201){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
    }
    if(resp && resp.status && resp.status===204){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
      navigate('/mobile-verification',{state:{mobile: resp.data.mobile}});
    }
    if(resp && resp.status && resp.status===200){
      switch (resp.user.userType) {
        case "Salon":
          navigate('/wait-for-approval');
          break;
        case "Admin":
            navigate('/admin');
          break;
        default:
        
          break;
      }
    }
    if(resp && resp.status && resp.status===203){
      let myColor = { background: "#FF385C", text: "#FFFFFF" };
      notify.show(resp.message, "custom", 5000, myColor);
      if(location.pathname === "/salon/login")
      {
        navigate('/salon/mobile-verification',{state:{mobile: dataState.userid}})
      }
      else{
        navigate('/mobile-verification',{state:{mobile: dataState.userid}})
      }
    }
  };


  const onChange = (e) => {  
    const input = e.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    e.persist();    
    setDataState({...dataState, [input.name]: value});    
       
                          } 

    useEffect(() => {
        const rememberMe = localStorage.getItem('rememberMe') == 'true';
        const userid = rememberMe ? localStorage.getItem('userid') : '';
        const password = rememberMe ? localStorage.getItem('password') : '';
             setDataState({ userid, rememberMe, password });
                           }, [])                       

  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const validate = () => {
    const regex = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$');
    const errors = {};
    if (dataState && dataState.userid.trim() === "") {
      errors.userid = "Please enter username";
    }
     else if (dataState && dataState.userid === null) {
      errors.userid = "Please enter username";
    } else if (dataState && dataState.userid === undefined) {
      errors.userid = "Please enter username";
    }
    else if (dataState && regex.test(dataState.userid) === false) {
      errors.userid = "Please enter valid email ID or mobile number";
    }
   
    if (dataState && dataState.password.trim() === "") {
      errors.confirmpassword = "Please enter your password";
    } 
    else if (dataState && dataState.password=== undefined) {
      errors.confirmpassword = "Please enter your password";
    } else if (dataState && dataState.password === null) {
      errors.confirmpassword = t("Confirmpasswordmsg");
    } 
    else if (dataState && dataState.password.length < 5) {
      errors.confirmpassword = "Password should be 6 charachter long";
    } 

    seterrors(errors);

    //console.log("errors",errors);
    return errors;
  };
  const clearState = () => {
    setDataState({
      userid: "",
      password: "",
    });
  };

  const submitCall = () => {
    validate();
    try {
      const iData = {
        username: dataState.userid,
        password: dataState.password,
      };
      const { rememberMe } = dataState;
      localStorage.setItem('rememberMe', rememberMe);
      localStorage.setItem('userid', rememberMe ? dataState.userid : '');
      localStorage.setItem('password', rememberMe ? dataState.password : '');
      dispatch(postAuthLogin(iData, callback));
    } catch (e) {
      console.log(e, "Error in the GLogin.js");
    }
  };

  
  return (
    <>
    <LoginWrapper>
    <Row>
              <Col className="pt_25" md={12}>
                <GIconInput
                  label="Mobile number/Email"
                  type="email"
                  name="email"
                  required="true"
                  placeholder="Mobile number/Email *"
                  validationMsg={errors.userid}
                  showvalidationMsg={errors.userid && true}
                  value={dataState.userid}
                  onChange={(e) =>
                    setDataState({ ...dataState, userid: e.target.value })
                  }
                />
              </Col>
              <Col md={12}>
                <GPasswordInput
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  value={dataState.password}
                  validationMsg={errors.confirmpassword}
                  showvalidationMsg={errors.confirmpassword && true}
                  onChange={(e) =>
                    setDataState({ ...dataState, password: e.target.value })
                  }
                />
              </Col>
              <Col md={12}>
                <GSpacing marginTop="10px" marginBottom="10px">
                  <GAlign align="between">
                    <div>
                      <GCheckbox
                        name="rememberMe"
                        onChange={onChange} 
                        checked={dataState.rememberMe}
                        id="remember"
                        label="Remember me"
                      />
                    </div>

                    <div>
                      {
                        (location.pathname === "/salon/login") ? <GLink to="/salon/forgot-password" text="Reset Password" /> : <GLink to="/reset" text="Forgot Password" />
                      }
                      
                    </div>
                  </GAlign>
                </GSpacing>
              </Col>

              <Col md={12}>
                <GButton onClick={submitCall} width="100%">
                  Log In
                </GButton>
              </Col>
              <Col md={12} className="text-center">
                <p className="mb-0 mt25">
                  Don't have an account ? {location.pathname === "/salon/login" ? <GLink to="/become-provider" text="Sign up" /> : <GLink to="/sign-up" text="Sign up" />} 
                </p>
              </Col>
            </Row>
    </LoginWrapper>
    </>
  )
}

export default LoginAction