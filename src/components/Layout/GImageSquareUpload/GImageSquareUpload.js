import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { notify } from "react-notify-toast";
import { Label } from "reactstrap";
import Img from "../../../assets/Img/Img";
import { GImageSquareUploadStyle } from "./GImageSquareUploadStyle";

const GImageSquareUpload = ({
  id = "profileimage",
  setImageUrl = null,
  getImage = (val) => {
  },
}) => {
  const [uploadedImg, setUploadedImg] = useState({
    file: null,
    url: null,
  });

  useEffect(() => {
    setUploadedImg({
      file: null,
      url: setImageUrl,
    });
  }, [setImageUrl]);
  const handleOnChange = (e) => {
    if (
      e.target.files[0].type !== "image/jpeg" &&
      e.target.files[0].type !== "image/jpg" &&
      e.target.files[0].type !== "image/png"
    ) {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show(
        'Invalid image format, please select "*.jpeg, *.jpg, *.png" format.',
        "custom",
        5000,
        myColor
      );
    }

    if (e.target.files[0].size > 10485760) {
      let myColor = { background: "#ff385c", text: "#FFFFFF" };
      return notify.show(
        "Image size allowed upto 10mb, Please select image under 10mb",
        "custom",
        5000,
        myColor
      );
    }

    if (e) {
      setUploadedImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
      getImage({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <>
      <GImageSquareUploadStyle />
      <div>
        <Label className="d-block" htmlFor={id}>
          <input
            className="d-none"
            type="file"
            id={id}
            accept="image/*"
            onChange={(e) => handleOnChange(e)}
          />
          <span className="pointer">
            {uploadedImg === null ? (
              "Change profile photo"
            ) : (
              <img
                src={uploadedImg.url ? uploadedImg.url : Img.imagesquare}
                className="img-fluid radius object-fit square_img"
                alt=""
              />
            )}
          </span>
        </Label>
      </div>
    </>
  );
};

export default GImageSquareUpload;
