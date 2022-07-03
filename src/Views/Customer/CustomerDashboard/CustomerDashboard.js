import React, { useState } from "react";
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import Img from "../../../Assets/Img/Img";
import Svg from "../../../Assets/Svg/Svg";
import GAlign from "../../../Components/GComponents/GAlign";
import GButton from "../../../Components/GComponents/GButton";
import ActiveTask from "./ActiveTask";
import AssignedTask from "./AssignedTask";
// import GIconLabelHorizontal from "../../../Components/GComponents/GIconLabelHorizontal";
import "./CustomerDashboard.css";
import PastTask from "./PastTask";

const CustomerDashboard = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <>
      <section className="pt40">
        <Container>
          <GAlign align="between" className="borBottom pb6 ">
            {/* Header Part of Customer Dashboard  */}
            <div>
              <h3 className="colorBlack fBold">My Tasks</h3>
            </div>
            <div className="dNoneXs">
              <span
                className={`${
                  selectedTab === 1 ? "colorBlue" : "colorBlack"
                } fs16 mr20 pointer`}
                onClick={() => {
                  setselectedTab(1);
                }}
              >
                Active task
              </span>
              <span
                className={`${
                  selectedTab === 2 ? "colorBlue" : "colorBlack"
                } fs16 mr20 pointer`}
                onClick={() => {
                  setselectedTab(2);
                }}
              >
                Assigned task
              </span>
              <span
                className={`${
                  selectedTab === 3 ? "colorBlue" : "colorBlack"
                } fs16 mr20 pointer`}
                onClick={() => {
                  setselectedTab(3);
                }}
              >
                Past task
              </span>
            </div>

            {/* For Mobile View Uncontrolled Dropdown */}
            <div className="dNoneMd dNoneLg dNoneXl">
              <UncontrolledDropdown className="noBgonDropDown">
                <DropdownToggle>
                  <span>{Svg.VerticalEllipsis}</span>
                </DropdownToggle>
                <DropdownMenu className="radius4 shadow noBorder">
                  <DropdownItem>
                    <ul className="noBg noUl mb0">
                      <li>
                        <span
                          className={`${
                            selectedTab === 1 ? "colorBlue" : "colorBlack"
                          } fs16 mr20 pointer`}
                          onClick={() => {
                            setselectedTab(1);
                          }}
                        >
                          Active tasks
                        </span>
                      </li>
                      <li>
                        <span
                          className={`${
                            selectedTab === 2 ? "colorBlue" : "colorBlack"
                          } fs16 mr20 pointer`}
                          onClick={() => {
                            setselectedTab(2);
                          }}
                        >
                          Assigned task
                        </span>
                      </li>
                      <li>
                        <span
                          className={`${
                            selectedTab === 3 ? "colorBlue" : "colorBlack"
                          } fs16 mr20 pointer`}
                          onClick={() => {
                            setselectedTab(3);
                          }}
                        >
                          Past task
                        </span>
                      </li>
                    </ul>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </GAlign>

          {/*When Task is Empty */}
          {selectedTab === 0 && <EmptyTask />}
          {/*ActiveTask Result */}
          {selectedTab === 1 && <ActiveTask />}
          {/*AssignedTask Result */}
          {selectedTab === 2 && <AssignedTask />}
          {/*PasTask Result with All Buttons*/}
          {selectedTab === 3 && <PastTask />}
        </Container>
      </section>
    </>
  );
};

export default CustomerDashboard;

{
  /* By Default Screen If Task is Empty */
}
const EmptyTask = () => {
  return (
    <section className="text-center pt120 pb120">
      <Container>
        <div>
          <img src={Img.group12} alt="" className="img-fluid mb15" />
        </div>
        <h4 className="fs20">You have not posted any recent quote requests.</h4>
        <p className="colorPara">
          Select a service that you need from the catalog.
        </p>
        <GButton>
          <span className="fLight">Post a task</span>
        </GButton>
      </Container>
    </section>
  );
};