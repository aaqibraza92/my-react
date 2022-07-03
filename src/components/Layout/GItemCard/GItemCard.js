import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  img {
    max-width: 100%;
    border-radius: ${(props) => {
      return props.radius ? props.radius : "0px";
    }};
    width: ${(props) => {
      return props.width ? props.width : "auto";
    }};
    height: ${(props) => {
      return props.height ? props.height : "auto";
    }};
    -webkit-object-fit: ${(props) => {
      return props.cover ? "cover" : "auto";
    }};
    object-fit: ${(props) => {
      return props.cover ? "cover" : "auto";
    }};
    filter: ${(props) => {
      return props.blur ? `blur(${props.blur})` : "none";
    }};
    -webkit-filter: ${(props) => {
      return props.blur ? `blur(${props.blur})` : "none";
    }};
  }
  .imgWrap {
    margin-bottom: 10px;
  }
  h6 {
    text-align: ${(props) => {
      return props.align ? props.align : "left";
    }};

    font-size: ${(props) => {
      return props.fsTitle ? props.fsTitle : "18px";
    }};
    margin-top: ${(props) => {
      return props.mtTitle ? props.mtTitle : "14px";
    }};
    margin-bottom: ${(props) => {
      return props.mbTitle ? props.mbTitle : "8px";
    }};
    color: ${(props) => {
      return props.colorTitle ? props.colorTitle : "#000";
    }};
  
  }
  p {
    text-align: ${(props) => {
      return props.align ? props.align : "left";
    }};
    color: ${(props) => {
      return props.colorPara ? props.colorPara : "#707070";
    }};
    font-size: ${(props) => {
      return props.fontSize ? props.fontSize : "16px";
    }};
    margin-bottom: 3px;
  }
`;

const RatingSection = styled.div`
  display: flex;
  .staricon {
    color: #707070;
  }
  .ratingNo,
  .staricon {
    margin-right: 7px;
  }
  .staricon svg {
    position: relative;
    top: -2px;
  }
`;
const GItemCard = (props) => {
  return (
    <Wrapper {...props}>
      {props.src && (
        <div className="imgWrap">
          <img src={props.src} alt="title" />
        </div>
      )}
      {props.title && <h6>{props.title}</h6>}
     
      <RatingSection>
        {props.rating && <span className="ratingNo">{props.rating}</span>}
        {props.icon && <span className="staricon"> {props.icon}</span>}
        {props.iconText && (
          <span className="staricon"> ({props.iconText} reviews)</span>
        )}
      </RatingSection>
      {
       props.para && <p>{props.para}</p>
      }
    </Wrapper>
  );
};

export default GItemCard;

