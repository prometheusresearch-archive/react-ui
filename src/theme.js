/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

/* global __REACT_UI_THEME__:false */

const size = {
  'xx-small': 4,
  'x-small': 8,
  'small': 16,
  'medium': 24,
  'large': 32,
  'x-large': 64,
  'xx-large': 96,
};

const fontSize = {
  'x-small': 12,
  'small': 14,
  'medium': 16,
  'large': 18,
  'x-large': 22,
};

let __THEME = {
  margin: size,
  padding: size,
  fontSize: fontSize,
  button: {
    hover: {},
    focus: {},
    active: {},
    disabled: {},
  }
};

if (typeof __REACT_UI_THEME__ !== 'undefined') {
  __THEME = __REACT_UI_THEME__;
}

module.exports = __THEME;
