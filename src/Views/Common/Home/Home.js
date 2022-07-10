import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import Svg from "../../../Assets/Svg/Svg";
import CmnAccordion from "../../../Components/CmnAccordion/CmnAccordion";
import GButton from "../../../Components/GComponents/GButton";
import GIconInput from "../../../Components/GComponents/GIconInput";
import GInput from "../../../Components/GComponents/GInput";
import GSwitchTab from "../../../Components/GComponents/GSwitchTab";
import GTextarea from "../../../Components/GComponents/GTextarea";
import GIconLabelHorizontal from "../../../Components/GComponents/GIconLabelHorizontal";
import GSectionTitle from "../../../Components/GSectionTitle";
import GIconLabelVertical from "../../../Components/GComponents/GIconLabelVertical";
import GInfoBox from "../../../Components/GInfoBox";
import GAccordion from "../../../Components/GComponents/GAccordion/GAccordion";
import { getAboutCompany, getSalonAmenities } from "../../../Helpers/backend";

// import About from "./About";

const Home = (props) => {
  var history = useHistory();
  const [mydata, setmydata] = useState(null);

  useEffect(() => {
    getAboutCompany().then((res)=>{
      console.log("aaqib",res);
    })
  }, []);

  

  return (
    <>
      <Container>
        <GAccordion
          data={[
            {
              id: 1,
              title: "lorem ipsum",
              content: "lorem ipsum data asdas asd asd asd asd asd ",
            },
            {
              id: 2,
              title: "lorem ipsum",
              content: "lorem ipsum data asdas asd asd asd asd asd ",
            },
            {
              id: 3,
              title: "lorem ipsum",
              content: "lorem ipsum data asdas asd asd asd asd asd ",
            },
          ]}
        />

        
      
      </Container>
    </>
  );
};

export default Home;
