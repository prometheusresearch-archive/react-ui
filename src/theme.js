/**
 * @copyright 2015, Prometheus Research, LLC
 */

/* global __REACT_UI_THEME__:false */

let __THEME = null;

if (typeof __REACT_UI_THEME__  !== 'undefined') {
  /* istanbul ignore next */
  __THEME = __REACT_UI_THEME__;
} else {
  __THEME = {
    button: {
      hover: {},
      focus: {},
      active: {},
      disabled: {},
    }
  };
}

module.exports = __THEME;
