export const OTPVerifyStyle = () => (
  <style jsx="true" global="true">{` 
  .otpmodalnew_cancelbutton {
    display: block;
    border: 1px solid rgb(207, 207, 207);
    background: transparent;
    color: rgb(0, 0, 0);
    margin-right: 5px;
    text-align: center;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 11pt;
    transition: all 0.2s ease;
  }
  
  .otpmodalnew_cancelbutton:hover {
    border: 1px solid rgb(201, 201, 201);
    background: rgb(233, 233, 233);
    color: rgb(0, 0, 0);
  }
  
  .otpmodalnew_okbutton {
    display: block;
    border: 1px solid rgb(22, 156, 55);
    background: rgb(23, 175, 61);
    color: #fff;
    margin-right: 5px;
    text-align: center;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 11pt;
    transition: all 0.2s ease;
  }
  
  .otpmodalnew_okbutton:hover {
    border: 1px solid var(--colorOrange);
    background: var(--colorOrange);
  }
  
  .otpmodalnew_otpinput input {
    border: 1px solid #dfdfdf;
    width: 50px !important;
    border-radius: 7px;
    outline: none;
  }
  .otpmodalnew_otpseprator {
    display: block;
    width: 10px;
  }
  .otpmodalnew_otpinput > div {
    justify-content: center;
  }
  .otpmodalnew_otpinput input:focus {
    border-color: var(--colorOrange);
    background-color: rgb(247, 244, 240);
    box-shadow: 0px 1px 5px rgba(255, 166, 0, 0.603);
  }
  .otpWrapper {
    max-width: 380px;
    background: #fff;
  }
  .radius5 {
    -webkit-border-radius: 7px;
    border-radius: 7px;
  }
   
  `}</style>
  )