import React, { useEffect } from "react";
import {
    CardTitle,
    CardText,
    Col,
    Container,
    Row,
  } from "reactstrap";
import { useParams } from "react-router-dom";
import Auth from '../../../helpers/Auth/Auth'
import { useDispatch } from 'react-redux';
import GLink from "../../../components/Layout/GLink";
import Svg from "../../../assets/svg/Svg";
import { authEmailVerified } from "../../../store/auth/login/actions";
const EmailVerification = (props) =>  {
    const dispatch = useDispatch();
    let { token } = useParams();  
    Auth.setToken(token)
    useEffect(() => {
        dispatch(authEmailVerified())
        //navigate('/login')
      }, []);

  return (
    <>
    <Container className="pt_45 pb_45">
        <Row>
          <Col className="text-center m-auto" md="4">
            <div className="card_thank box_s border_radius8">
              {Svg.thankyou}
              <CardTitle tag="h3" className="pt25 pb15">
                {" "}
                - Thank you -
              </CardTitle>
              <CardText>
                Phew, an email is now winging its way to you with instructions
                about how to get a new password.
              </CardText>
              <GLink
                to="/login"
                text="Login"
                className="buttonType"
              ></GLink>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EmailVerification