import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import Img from "../../Assets/Img/Img";
import GButton from "../../Components/GComponents/GButton";
import GLink from "../../Components/GComponents/GLink";

export default function Unauthorized() {
  const history = useHistory();
  return (
    <>
      <Container>
        <div
          style={{ height: "90vh" }}
          className="w-100 d-flex justify-content-center flex-column align-items-center"
        >
          <div>
            <img src={Img.unauthorized} alt="" className="mb30 w-100" />
          </div>
          <h1 className="fBold">404</h1>
          <br />
          <p className="colorPara">
            Sorry, the page you are looking for cannot be found.{" "}
          </p>
          <div className="d-flex mb15">
            <GButton
              onClick={(e) => {
                history.goBack();
              }}
            >
              Go Back
            </GButton>
            <GButton
              onClick={(e) => {
                history.goBack();
              }}
              backgroundColor="#fff"
              color="#000"
              border="1px solid #E8E9E9"
              ml="10px"
            >
              Go Home
            </GButton>
          </div>
          <GLink
            to="#"
            text="Get a Quotation"
            textDecoration="underline"
          ></GLink>
        </div>
      </Container>
    </>
  );
}
