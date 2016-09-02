/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

/* global __REACT_UI_THEME__:false */

import {color} from './stylesheet';

const brandColors = {
  primary: color('#004E94'),
  secondary: color('#0094CD'),
};

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

const textColors = {
  normal: '#000',
  disabled: '#999',
};

let __THEME = {
  margin: size,
  padding: size,
  fontSize: fontSize,
  brandColors: brandColors,
  textColors: textColors,
  button: {
    hover: {},
    focus: {},
    active: {},
    disabled: {},
  }
};

if (typeof __REACT_UI_THEME__ !== 'undefined') {
  if (typeof __REACT_UI_THEME__ === 'function') {
    __THEME = __REACT_UI_THEME__(__THEME) || __THEME;
  } else {
    __THEME = __REACT_UI_THEME__;
  }
}

module.exports = __THEME;
