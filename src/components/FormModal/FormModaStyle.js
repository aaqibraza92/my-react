export const FormModaStyle = () => (
  <style jsx="true" global="true">{`
    body .header_area_alert {
      position: absolute;
      right: -15px;
      z-index: 1;
      background-color: #fff !important;
      width: 20px !important;
      height: 20px !important;
      padding: 23px !important;
      border-radius: 50% !important;
      top: -15px;
    }

    .header_area_alert button span {
      font-size: 20px !important;
      font-weight: bold;
    }

    .modal-header .btn-close {
      color: chartreuse !important;
      background: none !important;
    }

    .modal-header .btn-close::after {
      content: "\\02DF";
      font-size: 49px;
      font-weight: 100;
      line-height: 0.65;
      color: #000 !important;
      opacity: 1;
      position: absolute;
      top: 13px;
      left: 14px !important;
    }
    .modal-header .btn-close:focus {
      outline: none;
      box-shadow: none;
    }

    .alertmodal_title {
      padding: 0;
      margin: 0;
      font-size: 14pt;
      font-weight: 700;
      color: #242d38;
    }

    .modal-header {
      padding: 0.5rem 1rem !important;
      border-bottom: none !important;
    }

    .modal-footer {
      padding: 0.4rem !important;
      border-top: none !important;
    }
    .btn-close {
      opacity: 1 !important;
    }
  `}</style>
);
