import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Label } from "reactstrap";
import Img from "../../../assets/Img/Img";
import GImage from "../GImage/GImage";
import { GImageUploadStyle } from "./GImageUploadStyle";

const GImageUpload = ({
  id = "profileimage",
  setImageUrl = null,
  getImage = () => {},
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
      <GImageUploadStyle />
      <div className="gimg_upload">
        <img
          src={uploadedImg.url ? uploadedImg.url : Img.imageupload}
          className="img-fluid cover h-100 radius100"
          alt=""
        />
      </div>
      <Label className="w-100 d-block" htmlFor={id}>
        <GImage src="" />
        <input
          className="d-none"
          type="file"
          id={id}
          accept="image/*"
          onChange={(e) => handleOnChange(e)}
        />
        <span className="gimg_span">
          {uploadedImg === null
            ? "Change profile photo"
            : " Upload profile photo"}
        </span>
      </Label>
    </>
  );
};

export default GImageUpload;
