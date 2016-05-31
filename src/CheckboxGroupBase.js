/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import invariant from 'invariant';
import React from 'react';
import {noop} from 'lodash';

import Checkbox from './CheckboxBase';

export let primitiveValueStrategy = {

  findIndex(value, option) {
    if (!value) {
      return -1;
    }
    return value.indexOf(option.value);
  },

  optionToValue(option) {
    return option.value;
  },

  isChecked(value, option) {
    return this.findIndex(value, option) > -1;
  },

  update(value, option, checked) {
    value = value || [];
    value = value.slice(0);
    let idx = this.findIndex(value, option);
    if (checked) {
      invariant(
        idx === -1,
        'Duplicate id added'
      );
      value.push(this.optionToValue(option));
    } else {
      invariant(
        idx > -1,
        'Non-existent id unchecked'
      );
      value.splice(idx, 1);
    }
    return value;
  }

};

export default class CheckboxGroupBase extends React.Component {

  static propTypes = {
    valueStrategy: React.PropTypes.object
  };

  static defaultProps = {
    valueStrategy: primitiveValueStrategy,
    onChange: noop,
    layout: 'vertical',
  };

  static stylesheet = {
    Root: 'div',
    CheckboxWrapper: 'div',
    Checkbox: Checkbox,
  };

  render() {
    let {options} = this.props;
    let {Root} = this.constructor.stylesheet;
    options = options.map(this.renderOption, this);
    return (
      <Root>
        {options}
      </Root>
    );
  }

  renderOption(option) {
    let {valueStrategy, layout} = this.props;
    let {CheckboxWrapper, Checkbox} = this.constructor.stylesheet;
    let checked = valueStrategy.isChecked(this.props.value, option);
    return (
      <CheckboxWrapper
        key={valueStrategy.optionToValue(option)}
        variant={{
          horizontal: layout === 'horizontal',
          vertical: layout === 'vertical'
        }}>
        <Checkbox
          label={option.label}
          value={checked}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          onChange={this.onChange.bind(this, option)}
          />
      </CheckboxWrapper>
    );
  }

  onChange(option, checked) {
    let {value, valueStrategy} = this.props;
    value = valueStrategy.update(value, option, checked);
    this.props.onChange(value);
  }
}
