import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }

  render() {
    const { buttonText } = this.props;

    return (
      <button
        data-test="buttonComponent"
        onClick={() => {
          this.submitEvent();
        }}
      >
        {buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default Button;
