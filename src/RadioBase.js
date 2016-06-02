/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import noop from 'lodash/noop';

export default class RadioBase extends React.Component {

  static defaultProps = {
    onChange: noop,
    stylesheet: {
      Root: 'div',
      Input: 'input',
      LabelWrapper: 'div',
      Hint: 'div',
      Label: 'div',
    }
  };

  render() {
    let {value, label, hint, inputRef, stylesheet, ...props} = this.props;
    let {Root, Input, Label, Hint, LabelWrapper} = stylesheet;
    return (
      <Root>
        <Input
          {...props}
          ref={inputRef}
          type="radio"
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
    this.props.onChange(true);
  };

  onChange = e => {
    this.props.onChange(e.target.checked);
  }
}
