import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
  /** Library Variable for verifying props from the parent component */
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.object,
    toggleModal: PropTypes.func.isRequired,
    bodyStyles: PropTypes.object.isRequired,
    showModal: PropTypes.bool.isRequired,
    key: PropTypes.string.isRequired,
  };

  componentDidMount() {
    if (this.modalContainer) {
      this.modalContainer.focus();
    }
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  handleKeyDownEvent = e => {
    if (e.which === 27) {
      this.props.toggleModal();
    }
  };

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.modalContainer && this.modalContainer.contains(e.target)) {
      return;
    }
    if (this.modalContainer) {
      document.removeEventListener('click', this.handleOutsideClick, false);
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <div
        className={`bodyOverlay`}
        role="presentation"
        onKeyDown={this.handleKeyDownEvent}
        key={this.props.key}
        ref={ref => {
          this.modalOverlay = ref;
        }}
        style={{ display: `${this.props.showModal ? 'flex' : 'none'}` }}
      >
        <div
          className={`modal ${this.props.className}`}
          ref={ref => {
            this.modalContainer = ref;
          }}
          tabIndex="-1"
          style={this.props.bodyStyles}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
Modal.defaultProps = {
  modalStyle: {},
};

export default Modal;
