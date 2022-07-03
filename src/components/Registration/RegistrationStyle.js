import flower from "../../assets/Img/flowergroup.png";

export const RegistrationStyle = (props) => (
  <style jsx="true" global="true">{`
    .bg_registration {
      z-index: -1;
      background-image: url(${flower});
      background-repeat: no-repeat;
      background-position: top;
    }

    .pointerdfasEvents {
      pointer-events: ${props?.agreeTerms === false && "none"};
      opacity: ${props?.agreeTerms === false && 0.5};
    }

    @media only screen and (max-width: 767px) {
      display: none;
    }
    @media only screen and (max-width: 991px) and (min-width: 768px) {
      .bg_registration {
        display: none;
      }
    }
  `}</style>
);
