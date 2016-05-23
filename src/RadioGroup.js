/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';

import Radio from './Radio';

export default class RadioGroup extends React.Component {

  static stylesheet = {
    Root: 'div',
    RadioWrapper: 'div',
    Radio: Radio,
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
    let value = this.props.value;
    let checked = value === option.id;
    return (
      <RadioWrapper key={option.id}>
        <Radio
          value={checked}
          label={option.title}
          onChange={this.onChange.bind(this, option.id)}
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

