export const OTPModalStyle = () => (
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
    border: 1px solid #20272B;
    background: #20272B;
    color: #fff;
  }
  
  .otpmodalnew_okbutton {
    display: block;
    border: 1px solid #FF385C;
    background: #FF385C;
    color: #fff;
    margin-right: 5px;
    text-align: center;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 11pt;
    transition: all 0.2s ease;
  }
  
  .otpmodalnew_okbutton:hover {
    border: 1px solid #20272B;
    background: #20272B;
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
  .otpmodalnew_otpinput input:focus {
    border-color: #FF385C;
    background-color: #FF385C0F;
    -webkit-box-shadow: 0px 1px 1px rgba(71,187,208,0.3);
    box-shadow: 0px 1px 1px rgba(71,187,208,0.3);
  }
  `}</style>
  )