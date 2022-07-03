import React from "react";
import { Container } from "reactstrap";
import Img from "../../../Assets/Img/Img";
import GSectionTitle from "../../../Components/GSectionTitle";
const ProviderMaintenance = () => {
  return (
    <>
      <section className="pt60 pb60 text-center">
        <Container>
          <div style={{ height: "90vh" }}
          className="w-100 d-flex justify-content-center flex-column align-items-center">
            <div>
              <img src={Img.maintenance} alt="" className="img-fluid mb20" />
            </div>
            {/* <GSectionTitle title="Website under maintenance" align="center"></GSectionTitle> */}
            <div>
              <h2 className="fBold">Website under maintenance</h2>
              <p className="colorPara width65 mobWidth100 tabWidth100 tabLgWidth100 mx-auto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProviderMaintenance;
