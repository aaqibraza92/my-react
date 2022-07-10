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
import HTTP from "../../../Helpers/Api/Api";

// import About from "./About";

const Home = (props) => {
  var history = useHistory();
  const Userdata = {
    name: "Ravi Verma",
    contact: "9030986754",
  };

  const [mydata, setmydata] = useState(null);

  useEffect(() => {
    loadData().then((res) => {
      setmydata(res);
      console.log("onloaddd" , res);
    });
  }, []);

  const loadData = async () => {
    let result = "";
    try {
      await HTTP.get("https://cat-fact.herokuapp.com/facts/").then((res) => {
        console.log("api data", res);
        result = res;
        return result;
      });
    } catch (e) {}
    return result;
  };

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

        {
          localStorage.getItem("myToken")!==null &&
          <>
            <h1>Home page</h1>
          <button
            onClick={(e) => {
              history.push({
                pathname: "/terms-conditions",
                search: "?the=search",
                state: { Userdata: Userdata },
              });
            }}
          >
            Click me
          </button>
          </>
        
        }
      
      </Container>
    </>
  );
};

export default Home;
