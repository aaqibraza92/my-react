import React from "react";
import { Container } from "reactstrap";
import Img from "../../../../Assets/Img/Img";

const AlwaysFree = () => {
  return (
    <section className="mb40">
      <Container>
        <div className="text-center">
          <div className="mb40">
            <h2 className="colorBlack fBold width40 mx-auto mobWidth100 tabWidth100 lh42">
              OUR PLATFORM
            </h2>
            <p className="width62 mx-auto mobWidth100 tabWidth100 tabLgWidth100">
              To make lives easier for service providers and persons requiring
              their service, we’ve built our platform with the following
              features:
            </p>
          </div>

          <div>
            <img src={Img.group55491} alt="" className="w-100" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AlwaysFree;
