import React from "react";
import { Col, Container, Label, Row } from "reactstrap";
import Img from "../../../assets/Img/Img";
import GImage from "../../Layout/GImage/GImage";
import { useTranslation } from "react-i18next";
import GIconInput from "../../Layout/GIconInput";
import CmnRadioBorder from "../../Layout/CmnRadioBorder/CmnRadioBorder";
import GCheckbox from "../../Layout/GCheckbox";
import GButton from "../../Layout/GButton";
import GSpacing from "../../Layout/GSpacing";

const NewsLetter = () => {
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return (
    <>
      <section className="pt20 pb20">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <GImage src={Img.newsletter} height="100%" />
            </Col>
            <Col lg={7}>
              <h1 className="fs28 lm mb20">{t("Signupfor")}</h1>
              <Row>
                <Col lg={6}>
                  <GIconInput
                    type="text"
                    label={t("Yourname")}
                    placeholder={t("Yourname")}
                    required={true}
                  />
                </Col>
                <Col lg={6}>
                  <GIconInput
                    type="text"
                    label={t("Youremail")}
                    placeholder={t("Youremail")}
                    required={true}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <GIconInput
                    type="number"
                    label={t("Postalcode")}
                    placeholder={t("Postalcode")}
                    required={true}
                  />
                </Col>
                <Col lg={6}>
                  <Label>Gender</Label>
                  <div className="d-flex">
                    <CmnRadioBorder id="male" label="Male" name="gender" />
                    <CmnRadioBorder id="female" label="Female" name="gender" />
                  </div>
                </Col>
              </Row>
              <GSpacing paddingBottom="30px">
                <GCheckbox
                  id="Tickthisbox"
                  label="Tick this box if you want to receive marketing emails from Treatwell with the latest offers & beauty news. You can unsubscribe at any time by clicking the unsubscribe link in those emails. You can find out more about how Treatwell stores, uses and protects your data in our privacy policy."
                />
              </GSpacing>
              <GButton
                border="1px solid #000"
                color="#fff"
                backgroundColor="#000"
                hoverBg="#000"
                hoveColor="#fff"
              >
                {t("Signup")}
              </GButton>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewsLetter;
