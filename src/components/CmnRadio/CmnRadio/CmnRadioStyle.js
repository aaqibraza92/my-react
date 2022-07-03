export const CmnRadioStyle = () => (
  <style jsx="true" global="true">{` 
  .cmnRadioOnly [type="radio"]:checked,
  .cmnRadioOnly [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  .cmnRadioOnly [type="radio"]:checked + label,
  .cmnRadioOnly [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: var(--colorBlack);
  }
  .cmnRadioOnly [type="radio"]:checked + label:before,
  .cmnRadioOnly [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  .cmnRadioOnly [type="radio"]:checked + label:after,
  .cmnRadioOnly [type="radio"]:not(:checked) + label:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    -webkit-transition: all 0.5s ease;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    border: 5px solid #47bbd0;
    padding: 4px;
    width: 18px;
    height: 18px;
  }
  .cmnRadioOnly [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  .cmnRadioOnly [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  } 
  `}</style>
  )

