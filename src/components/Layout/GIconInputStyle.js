export const GIconInputStyle = () => (
  <style jsx global>{`
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
      font-size: 16px;
      margin-bottom: 4px;
    }
    input {
      barder-radius: 4px solid #a7a9b1;
    }
  `}</style>
);
