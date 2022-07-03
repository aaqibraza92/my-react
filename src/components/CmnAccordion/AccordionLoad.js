import React, { useState } from "react";
const AccordionLoad = ({ id, title, content }) => {
  const [showData, setshowData] = useState(false);

  const action = () => {
    setshowData(!showData);
  };
  return (
    <>
      <style jsx="true">
        {`
          .accordionTrigger {
            display: flex;
            justify-content: space-between;
            background: transparent;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            padding-top: 10px;
            border-right: none;
            border-left: none;
            border-top: none;
            padding-left: 12px;
            padding-right: 12px;
            transition: all 0.2s ease-in 0s;
          }
          .accordionTrigger:hover {
            background-color: #ddd;
          }
          .accContent {
            padding: 20px 12px;
          }
          .triggerTitle {
            font-size: 15px;
            font-weight: bold;
          }
        `}
      </style>
      <div className="accWrapper">
        <button
          id={"accordion_" + id}
          className="accordionTrigger w-100 no-link"
          onClick={() => action()}
        >
          {<span className="triggerTitle">{title}</span>}
          <span>{showData ? icons.minus : icons.plus}</span>
        </button>

        {showData && <p className="accContent">{content}</p>}
      </div>
    </>
  );
};

export default AccordionLoad;

const icons = {
  plus: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
      >
        <g
          id="Icon_feather-plus"
          data-name="Icon feather-plus"
          transform="translate(-6 -6)"
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M18,7.5v21"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <path
            id="Path_2"
            data-name="Path 2"
            d="M7.5,18h21"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
        </g>
      </svg>
    </>
  ),
  minus: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="3"
        viewBox="0 0 24 3"
      >
        <path
          id="Icon_feather-minus"
          data-name="Icon feather-minus"
          d="M7.5,18h21"
          transform="translate(-6 -16.5)"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </svg>
    </>
  ),
};
