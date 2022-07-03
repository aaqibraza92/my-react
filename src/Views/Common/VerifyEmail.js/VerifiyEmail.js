import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Img from "../../../Assets/Img/Img";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import GButton from "../../../Components/GComponents/GButton";
import LoadinMsg from "../../../Components/LoadingModal/LoadingMsg";
import HTTP from "../../../Helpers/Api/Api";
import API from "../../../Helpers/Constants/Constants";

const VerifyEmail = (props) => {
  const { token } = useParams();
  const history = useHistory();
  const [verified, setVerified] = useState(false);
  const [showProgress, setShowProgress] = useState(true);
  var timeout;
  useEffect(() => {
    timeout = setTimeout(() => {
      verifyEmail(token);
    }, 3000);
  }, []);

  const verifyEmail = (token) => {
    try {
      clearTimeout(timeout);
      if (!token)
        return AlertModal.show(
          "this link is expired. Please contact admin.",
          "Oops!"
        );
      HTTP.post(API.verifyEmail, { token: token }, false, "").then((res) => {
        if (res && res.status && res.status.toString() === "200") {
          setVerified(true);
          setShowProgress(false);
        } else {
          setVerified(false);
          setShowProgress(false);
        }
      });
    } catch (error) {
      setVerified(false);
      setShowProgress(false);
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "100vh" }}
      >
        {showProgress && (
          <LoadinMsg
            message="Verifying your email. Please wait..."
            size="small"
            type="grow"
          />
        )}
        {!showProgress && verified && (
          <>
            <img
              className="img-fluid"
              src={Img.success}
              alt=""
              className="mb20"
            />
            <h2 className="f24 f700 colorBlack fBold mb10">
              Email verified successfully.
            </h2>
            <p className="fs14 mb5">Please go back to login.</p>
            <p className="mt50">
              <GButton
                onClick={(e) => {
                  history.push("/login");
                }}
              >
                Back to Login
              </GButton>
            </p>
          </>
        )}

        {!showProgress && !verified && (
          <div>
            <h2 className="f24 f700 colorBlack fBold mb10">
              Email verification failed.
            </h2>
            <p className="fs16 mb5">You have to re-verify your email.</p>
            <p className="mt50 mb30">
              <GButton
                onClick={(e) => {
                  history.push("/login");
                }}
              >
                Resend Verification Link
              </GButton>
            </p>
            <p className="fs18 mb5" style={{color : "#9c909c"}}>After clicking resend button, <br/> Please go back to your mail and re-verify email by using the new link.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default VerifyEmail;
