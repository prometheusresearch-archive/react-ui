/**
 * @copyright 2015, Prometheus Research, LLC
 */

/* global __REACT_UI_THEME__:false */

let size = {
  'xx-small': 4,
  'x-small': 8,
  'small': 16,
  'medium': 24,
  'large': 32,
  'x-large': 64,
  'xx-large': 96,
};

let __THEME = {
  margin: size,
  padding: size,
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
