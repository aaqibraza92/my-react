export const GMultiImageUploadStyle = () => (
  <style jsx="true" global="true">{`
    .btn_delete_icon {
      display: block;
      width: 25px;
      height: 25px;
      border: none;
      background: var(--colorRed);
      position: absolute;
      right: -10px;
      top: -10px;
    }
    .images_container_upload {
      max-height: 215px;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .btn_delete_icon.btnBgBlack {
      background: rgba(0, 0, 0, 0.6);
      top: inherit;
      right: inherit;
      transform: translate(0, -3px);
      display: none;
    }
    .btnBgBlack svg {
      position: relative;
      top: -2px;
    }
    .img_alignn:hover button {
      display: block;
    }

    .img_upload {
      position: absolute;
      overflow: hidden;
    }
    .innerBorder {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
      height: 100%;
    }
    .images_container_upload {
      background-color: #fff1f4;
      padding: 8px;
      width: 388px;
      height: 215px;
      -webkit-border-radius: 7px;
      border-radius: 7px;
      background-repeat: no-repeat;
      background-size: 100%;
      .btn_delete_icon {
        display: block !important;
        width: 25px !important;
        height: 25px !important;
        border: none !important;
        background: var(--colorRed) !important;
        position: absolute !important;
        right: -10px !important;
        top: -10px !important;
      }
    }

    .gmult_img_upload {
      background: #ff385c;
      color: #fff;
      padding: 8px 20px;
      cursor: pointer;
      width: 100%;
      display: block;
      border-radius: 4px;
    }
  `}</style>
);
