import React, { Component } from "react";
import PropTypes from "prop-types";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import isBoolean from "lodash/isBoolean";

import classnames from "classnames";
import "./index.css";

class ToggleSwitch extends Component {
  state = {
    enabled: this.enabledFromProps()
  };

  isEnabled = () => this.state.enabled;

  enabledFromProps() {
    let { enabled } = this.props;

    enabled = isFunction(enabled) ? enabled() : enabled;

    return isBoolean(enabled) && enabled;
  }

  toggleSwitch = evt => {
    evt.persist();
    evt.preventDefault();

    const { onClick, onStateChanged } = this.props;

    this.setState(
      {
        enabled: !this.state.enabled
      },
      () => {
        const state = this.state;

        const switchEvent = Object.assign(evt, {
          SWITCH_STATE: state
        });

        isFunction(onClick) && onClick(switchEvent);
        isFunction(onStateChanged) && onStateChanged(state);
      }
    );
  };
}

ToggleSwitch.propTypes = {
  theme: PropTypes.string,
  enabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onStateChanged: PropTypes.func
};

export default ToggleSwitch;
