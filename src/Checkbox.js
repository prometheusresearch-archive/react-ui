/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';

export default class Checkbox extends React.Component {

  static stylesheet = {
    Root: 'div',
    Input: 'input',
    Label: 'label',
  };

  render() {
    let {value, label, ...props} = this.props;
    let {Root, Input, Label} = this.constructor.stylesheet;
    return (
      <Root>
        <Input
          {...props}
          type="checkbox"
          checked={value}
          onChange={this.onChange}
          />
        {label && <Label>{label}</Label>}
      </Root>
    );
  }

  onChange = e => {
    this.props.onChange(e.target.checked);
  };
}

