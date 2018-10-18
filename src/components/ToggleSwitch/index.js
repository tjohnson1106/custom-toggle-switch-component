import React, { Component } from "react";
import PropTypes from "prop-types";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import isBoolean from "lodash/isBoolean";

import classnames from "classnames";
import "./index.css";

class ToggleSwitch extends Component {}

ToggleSwitch.propTypes = {
  theme: PropTypes.string,
  enabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onStateChanged: PropTypes.func
};

export default ToggleSwitch;
