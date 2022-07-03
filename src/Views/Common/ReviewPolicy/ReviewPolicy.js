import React from "react";
import { Container } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import GSectionTitle from "../../../Components/GSectionTitle";
const ReviewPolicy = () => {
  return (
    <div>
      <section className="bgDarkBlue pt60 pb60 mb70">
        <GSectionTitle
          title="Review Policy"
          titleSize="45px"
          titlecolor="#fff"
          align="center"
          subtitlecolor="#fff"
          fontWeight="Bold"
        ></GSectionTitle>
        <div className="text-center">
          <span className="colorWhite fs16">Home </span>
          <span className="ml15 mr15">{Svg.greaterthan}</span>
          <span className="colorWhite opacity80 fs16">Review Policy </span>
        </div>
      </section>
      <Container>
        <section className="mb70">
          <h2 className="fs28 colorLightBlack mb15 fBold">Review Policy</h2>
          <p className="colorPara mb15">
            The following provisions apply to all users who post or submit a
            user generated review. You hereby agree to the following provisions:
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Rights To Post Information:
          </h2>
          <p className="colorPara mb20">
            You give Ahlookin the right to post any information you provided to
            us about your review, that would assist others in making an informed
            decision.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Reservation Of Right To Remove Or Not Allow A Review:
          </h2>
          <p className="colorPara mb20">
            Ahlookin reserves the right to not allow a user to submit or post a
            review on this Website.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Non-Confidentiality Of A Review:
          </h2>
          <p className="colorPara mb20">
            Unless otherwise agreed, any information sent on a review will be
            treated as non-confidential.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Responsibility For The Review:
          </h2>
          <p className="colorPara mb20">
            The writer of the review accepts all responsibility for the review
            they submitted. You hereby agree to indemnify Ahlookin.com from any
            claims that results from your posting.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">Adherence To Laws:</h2>
          <p className="colorPara mb20">
            You will not post anything that encourages persons to violate our
            laws and the laws of their local, national, or international
            communities.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Use Of The Reviews:
          </h2>
          <p className="colorPara mb20">
            By posting reviews to Ahlookin, you agree to grant us permission to
            use your review in the way that best suits our needs. You therefore
            agree to give Ahlookin the necessary permission to reproduce,
            display, translate, and distribute your review, on a free basis.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Conflict Of Interest:
          </h2>
          <p className="colorPara mb20">
            You agree that you are not reviewing your own service. You should
            not be the service provider, an employee of the service provider, or
            have any other relationship which could be viewed as a conflict of
            interest.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Competing Relationships And Interests:
          </h2>
          <p className="colorPara mb20">
            You agree to inform Ahlookin of any competing relationship before
            any review. You agree that your review will be honest and truly
            representative of the service provided.
          </p>
          <h2 className="fs20 colorLightBlack mb8 fBold">
            Ownership Of Content:
          </h2>
          <p className="colorPara mb10">
            You agree that the contents of your review do not contain any
            copyright, trademark, or licensing infringements. The content of the
            review should not knowingly encroach on another person’s
            intellectual property.
          </p>
          <p className="colorPara mb10">
            Ahlookin reserves the right to not post reviews or remove reviews in
            the following cases:
          </p>
          <ul className="fs16 colorPara mb0">
            <li className="mb15">
              Spam: If your posting is not a review of the respective service,
              it will be treated as spam.
            </li>
            <li className="mb15">
              Advertisements that have not gained the appropriate approval
            </li>
            <li className="mb15">Defamatory remarks</li>
            <li className="mb15">Profanity, vulgarities, or obscenities</li>
            <li className="mb15">
              Reviews that represent a conflict of interest
            </li>
            <li className="mb15">Violation of the Law</li>
          </ul>
          <p className="colorPara mb0">
            The above provisions are subjected to change from time to time.
          </p>
        </section>
      </Container>
    </div>
  );
};

export default ReviewPolicy;
