import styled from "styled-components";

const GInput = styled.input`
background-color: ${(props) =>
  props.backgroundColor ? props.backgroundColor : "#FFF"};
width: 100%;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
padding: ${(props) => (props.padding ? props.padding : ".5rem .8rem")};
margin: ${(props) => (props.margin ? props.margin : "0rem")};
border-radius: ${(props) =>
  props.borderRadius ? props.borderRadius : "3px"};
display: block;
border: 1px solid #e8e9e9;
outline: none;
color: ${(props) => (props.color ? props.color : "#3f3f3f")};
flex-direction: ${(props) => (props.direction ? props.direction : "row")};
font-size: 16px;
min-width: 100px;
max-height: 45px;
-webkit-transition: all 0.2s linear 0s;
transition: all 0.2s linear 0s;
padding-left: ${(props) => (props.iconLeft ? '38px' : "10px")};

:focus {
  background-color: ${(props) =>
    props.hoverBgColor ? props.hoverBgColor : "#ecfbfe"};
  border: 1px solid #47bbd0;
  box-shadow: 0px 1px 1px rgba(71, 187, 208, 0.3);

}
`;

export default GInput;
