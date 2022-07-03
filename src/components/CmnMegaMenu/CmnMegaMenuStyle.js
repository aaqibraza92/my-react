export const CmnMegaMenuStyle = () => (
  <style jsx="true" global="true">{`
  .megaMenuModal .modal-content {
    height: auto !important;
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  .megaMenuModal {
    min-height: auto !important;
    height: auto;
  }
  .megaMenuModal .modal-content {
    max-height: 20%;
    overflow-y: auto;
  }
  .megaMenuModal {
    min-height: auto !important;
    height: auto;
    margin-top: 76.5px;
  }
  .cmnMegabackdrop {
    background: transparent;
  }
  .modal-fullscreen .btn-close,
  .modal-fullscreen .modal-footer button {
      position: relative;
      right: 22px;
      top: 3px;
    }
  `}</style>
)