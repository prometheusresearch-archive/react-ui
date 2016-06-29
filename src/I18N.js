/**
 * @copyright 2016-present, Prometheus Research, LLC
 * @flow
 */

import * as React from 'react';

export type I18NContext = {
  dir: 'ltr' | 'rtl';
};

export const contextTypes = {
  i18n: React.PropTypes.object,
};

export const defaultContext: I18NContext = {
  dir: 'ltr',
};

export default class I18N extends React.Component {

  props: I18NContext & {
    children: any;
  };

  static contextTypes = contextTypes;

  render() {
    return React.Children.only(this.props.children);
  }

  getChildContext() {
    let i18n = {
      dir: this.props.dir,
    };
    return {i18n};
  }
}

