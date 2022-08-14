import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Counter.css";

const Counter = () => {
  return (
    <section className="bgDarkBlue pt80 pb80 mobPt40 mobPb40 mb80 ">
      <Container>
        <div className="text-center">
          <div className="mb60 mobMb15">
            <h2 className="fBold colorWhite mb20">
              Can't find what you're looking for?
            </h2>
            <p className="colorWhite width62 mx-auto mobWidth100 tabWidth100 tabLgWidth100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the specimen book.
            </p>
          </div>
          <section className="width75 mx-auto mobWidth100">
            <Row>
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30">6m+</div>
                  <p className="colorWhite">
                    Monthly <br /> active on Bluebis
                  </p>
                </section>
              </Col>
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30">10k+</div>
                  <p className="colorWhite">
                    Experts <br /> on Bluebis
                  </p>
                </section>
              </Col>
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30">$2b+</div>
                  <p className="colorWhite">
                    Paid out <br /> to expertss
                  </p>
                </section>
              </Col>
            </Row>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Counter;

//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       if (counter < 6) {
//         setCounter(counter + 1);
//       }
//     }, 1000);
//   });

//    <div className="fs50 colorBlue fBold mobfs30">{counter}</div>
