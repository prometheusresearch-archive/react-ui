/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import noop from 'lodash/noop';
import * as I18N from './I18N';

export default class CheckboxBase extends React.Component {

  static contextTypes = I18N.contextTypes;

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
    let {
      value, label, title, hint, stylesheet,
      variant, disabled, ...props
    } = this.props;
    let {Root, Input, Label, Hint, LabelWrapper} = stylesheet;
    let {i18n = I18N.defaultContext} = this.context;
    variant = {
      rtl: i18n.dir === 'rtl',
      ltr: i18n.dir === 'ltr',
      disabled,
      ...variant,
    };
    return (
      <Root title={title} variant={variant}>
        <Input
          {...props}
          disabled={disabled}
          variant={variant}
          type="checkbox"
          checked={value}
          onChange={this.onChange}
          />
        {label &&
          <LabelWrapper variant={variant} onClick={this.onClick}>
            <Label variant={variant}>{label}</Label>
            <Hint variant={variant}>{hint}</Hint>
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


