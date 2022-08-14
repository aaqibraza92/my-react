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
                The generated Lorem Ipsum is therefore always free
              </h2>
              <p className="width62 mx-auto mobWidth100 tabWidth100 tabLgWidth100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s
              </p>
            </div>
       
            <div>
              <img src={Img.group55491} alt="" className="w-100"/>
            </div>
          
        </div>
      </Container>
    </section>
  );
};

export default AlwaysFree;
