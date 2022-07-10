import styled from "styled-components";

const GButton = styled.button`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#47BBD0'};
  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow : 0px 1px 3px rgba(0, 0, 0, 0.3);
  padding : ${props => props.padding ? props.padding : '8px 20px'};
  margin : ${props => props.margin ? props.margin : '0rem'};
  -webkit-border-radius : ${props => props.borderRadius ? props.borderRadius : '3px'};
  border-radius : ${props => props.borderRadius ? props.borderRadius : '3px'};
  border : none;
  outline : none;
  color : ${props => props.color ? props.color : '#FFFFFF'};
  flex-direction : ${props => props.direction ? props.direction : 'row'};
  font-weight : 500;
  font-size : 16px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  width: ${(props)=>{
    return props.width ? props.width : "auto"
  }};

  :hover{
      background-color : ${props => props.hoverColor ? props.hoverColor : '#20272B'};
  }
  @media (max-width: 991px) {
    font-size : 16px;
    padding : ${props => props.padding ? props.padding : '.3rem 1rem'};
    margin-left : .5rem;
  }
`;

export default GButton;
