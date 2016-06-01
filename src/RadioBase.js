/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import {uniqueId, noop} from 'lodash';

export default class RadioBase extends React.Component {

  static stylesheet = {
    Root: 'div',
    Input: 'input',
    LabelWrapper: 'div',
    Hint: 'div',
    Label: 'div',
  };

  static defaultProps = {
    onChange: noop,
  };

  constructor(props) {
    super(props);
    this._inputID = uniqueId('radio');
  }

  render() {
    let {value, label, hint, inputRef, ...props} = this.props;
    let {Root, Input, Label, Hint, LabelWrapper} = this.constructor.stylesheet;
    return (
      <Root>
        <Input
          {...props}
          ref={inputRef}
          id={this._inputID}
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
