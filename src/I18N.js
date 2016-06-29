/**
 * @copyright 2016-present, Prometheus Research, LLC
 * @flow
 */

import * as React from 'react';

export type I18NContext = {
  rtl: boolean;
};

export const contextTypes = {
  i18n: React.PropTypes.object,
};

export const defaultContext: I18NContext = {
  rtl: false,
};

export default class I18N extends React.Component {

  static contextTypes = contextTypes;

  render() {
    return React.Children.only(this.props.children);
  }

  getChildContext() {
    let i18n = {
      rtl: this.props.rtl,
    };
    return {i18n};
  }
}

