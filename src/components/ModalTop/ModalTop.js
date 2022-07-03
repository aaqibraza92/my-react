import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { ModalTopStyle } from "./ModalTopStyle";

class ModalTop extends Component {
  constructor(props) {
    super(props);
    window.modalTop = this;
    this.state = {
      showmodal: false,
      message: "02",
      title: "",
      isyes: false,
      size: "",
      buttontext: "OK",
      fullscreen: false,
      showCloseButton: true,

      callbackfunc: () => {},
    };
  }

  hide() {
    this.setState({
      showmodal: false,
    });
  }

  show(
    msg,
    title,
    callback,
    size = "xs",
    buttontext = "OK",
    fullscreen = false,
    showCloseButton = true
  ) {
    let res = this.state.isyes;
    this.setState({
      showmodal: true,
      message: msg,
      title: title,
      callbackfunc: callback,
      size: size,
      buttontext: buttontext,
      fullscreen: fullscreen,
      showCloseButton: showCloseButton,
    });
    return res;
  }

  toggleit() {
    this.setState({ showmodal: false });
  }

  onclickyes() {
    this.setState({ isyes: true, showmodal: false });
    this.state.callbackfunc();
  }
  setmessage(message) {
    this.setState({ message: message });
  }
  setcallback(callback) {
    this.setState({ callbackfunc: callback });
  }

  static show(
    message,
    title = "",
    callback = () => {},
    size = "xs",
    buttontext = "OK",
    fullscreen = false,
    showCloseButton = true
  ) {
    return window.modalTop.show(
      message,
      title,
      callback,
      size,
      buttontext,
      fullscreen,
      showCloseButton
    );
  }

  static hide() {
    return window.modalTop.hide();
  }

  render() {
    return (
      <>
        <ModalTopStyle />
        <Modal
          size={this.state.size}
          isOpen={this.state.showmodal}
          centered={true}
          className={`modal-dialog myallrtt homepage_serch_bar ${this.props.className}`}
          toggle={(e) => {
            this.setState({ showmodal: false });
          }}
          backdrop={true}
          keyboard={true}
        >
          {this.state.showCloseButton && (
            <ModalHeader
              className="top_header_area_alert right_button_modal"
              charcode="Y"
              toggle={() => this.toggleit()}
            >
              <span className="top_alertmodal_title"> {this.state.title}</span>
            </ModalHeader>
          )}
          {!this.state.showCloseButton && (
            <ModalHeader className="top_header_area_alert">
              <span className="top_alertmodal_title"> {this.state.title}</span>
            </ModalHeader>
          )}
          <ModalBody className="p-0">{this.state.message}</ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalTop;
