import React from "react";
import { Container } from "reactstrap";
import AccordionLoad from "./AccordionLoad";

const GAccordion = (props) => {

  return (
    <>
      <section>
        <Container>
          {props.data.map((elem, index) => {
            return <AccordionLoad key={index} indexid={index} {...elem} />;
          })}
        </Container>
      </section>
    </>
  );
};
export default GAccordion;
