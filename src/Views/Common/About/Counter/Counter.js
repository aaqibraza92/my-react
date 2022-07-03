import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Counter.css";

const Counter = () => {
  return (
    <section className="bgDarkBlue pt100 pb100 mobPt40 mobPb40 mb100 ">
      <Container>
        <div className="text-center">
          <div className="mb40 mobMb15">
            <h2 className="fBold colorWhite mb20">Building Communities</h2>
            <p className="colorWhite width62 mx-auto mobWidth100 tabWidth100 tabLgWidth100 mb0">
              At Ahlookin, we’re supporting the local economy and connecting
              communities. We connect dreamers with doers; local professionals
              with busy people, thereby assisting micro and small businesses
              across the country. We believe this approach will give everyone a
              fair opportunity to be successful.
            </p>
          </div>
          <section className="width75 mx-auto mobWidth100">
            <Row>
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30">6m+</div>
                  <p className="colorWhite mb0">
                    Monthly <br /> active on Bluebis
                  </p>
                </section>
              </Col>
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30">10k+</div>
                  <p className="colorWhite mb0">
                    Experts <br /> on Bluebis
                  </p>
                </section>
              </Col>
              <Col lg={4} md={4} xs={4}>
                <section>
                  <div className="fs50 colorBlue fBold mobfs30">$2b+</div>
                  <p className="colorWhite mb0">
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
