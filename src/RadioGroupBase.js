/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import {noop} from 'lodash';

import Radio from './RadioBase';

export default class RadioGroupBase extends React.Component {

  static stylesheet = {
    Root: 'div',
    RadioWrapper: 'div',
    Radio: Radio,
  };

  static defaultProps = {
    onChange: noop,
    layout: 'vertical',
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
    let {RadioWrapper, Radio} = this.constructor.stylesheet;
    let {value, layout} = this.props;
    let checked = value === option.value;
    return (
      <RadioWrapper
        key={option.value}
        variant={{
          horizontal: layout === 'horizontal',
          vertical: layout === 'vertical'
        }}>
        <Radio
          value={checked}
          label={option.label}
          onChange={this.onChange.bind(this, option.value)}
          />
      </RadioWrapper>
    );
  }

  onChange(id, checked) {
    if (checked) {
      this.props.onChange(id);
    }
  }
}
