/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import noop from 'lodash/noop';

export default class CheckboxBase extends React.Component {

  static defaultProps = {
    onChange: noop,
    stylesheet: {
      Root: 'div',
      Input: 'input',
      LabelWrapper: 'div',
      Hint: 'div',
      Label: 'div',
    },
  };

  render() {
    let {value, label, title, hint, stylesheet, ...props} = this.props;
    let {Root, Input, Label, Hint, LabelWrapper} = stylesheet;
    return (
      <Root title={title}>
        <Input
          {...props}
          type="checkbox"
          checked={value}
          onChange={this.onChange}
          />
        {label &&
          <LabelWrapper onClick={this.onClick}>
            <Label>{label}</Label>
            <Hint>{hint}</Hint>
          </LabelWrapper>}
      </Root>
    );
  }

  onClick = _e => {
    if (!this.props.disabled) {
      let value = !this.props.value;
      this.props.onChange(value);
    }
  };

  onChange = e => {
    this.props.onChange(e.target.checked);
  };
}


