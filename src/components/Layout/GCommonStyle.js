export const GCommonStyle = (props) => (
  <style jsx="true" global="true">{`
    // GHorizontal Input CSS
    .giconinput_absolute {
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      top: 0px;
      -webkit-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
    }
    .giconinput_iconLeft {
      left: 10px;
    }
    .giconinput_absolute svg {
      width: 18px;
    }
    .giconinput_iconRight {
      right: 10px;
      cursor: pointer;
    }
    .giconinput_absolute:hover {
      opacity: 0.8;
    }
    .giconinput_subText {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
      padding-left: 10px;
    }
    .giconinput_sublabel {
      font-size: 12px;
      color: #5e77d9;
    }
    .giconinput_required {
      color: red;
      font-size: 14px;
    }
    .labelInput {
      font-size: 15px;
      color: #52585b;
    }
    input {
      barder-radius: 4px solid #a7a9b1;
    }

    // Accordion Load CSS
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

    // FileUploadWithName CSS
    .file_label {
      display: block;
      //   padding: 20px 0;
    }
    .pointerEvents {
      pointer-events: ${props?.dataState?.agreeTerms === false && "none"};
      opacity: ${props?.dataState?.agreeTerms === false && 0.5};
    }
  `}</style>
);
