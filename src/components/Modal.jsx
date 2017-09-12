import React, { Component } from 'react';
import '../comStyles/Modal.css';


class Modal extends Component {

  render() {
    return(
      <div id={this.props.isOpen ? "overlay" : ""}>
        {this.props.isOpen ? <h1>Hi this is in a modal <span onClick={this.props.closeModal.bind(this)}>X</span></h1> : null}

      </div>
    )
  }
}

export default Modal;
