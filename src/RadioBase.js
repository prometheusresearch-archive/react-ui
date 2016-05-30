/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import {uniqueId, noop} from 'lodash';

export default class RadioBase extends React.Component {

  static stylesheet = {
    Root: 'div',
    Input: 'input',
    Label: 'label',
  };

  static defaultProps = {
    onChange: noop,
  };

  constructor(props) {
    super(props);
    this._inputID = uniqueId('radio');
  }

  render() {
    let {value, label, ...props} = this.props;
    let {Root, Input, Label} = this.constructor.stylesheet;
    return (
      <Root>
        <Input
          {...props}
          id={this._inputID}
          type="radio"
          checked={value}
          onChange={this.onChange}
          />
        {label && <Label htmlFor={this._inputID}>{label}</Label>}
      </Root>
    );
  }

  onChange = e => {
    this.props.onChange(e.target.checked);
  }
}
