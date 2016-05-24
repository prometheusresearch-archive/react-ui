/**
 * @copyright 2016, Prometheus Research, LLC
 */

import * as React from 'react';
import * as Stylesheet from 'react-stylesheet';

import {
  tryParseInteger,
  extractValueFromEvent
} from './FormUtils';

let stylesheet = Stylesheet.create({
  Input: 'input',
});

export default class IntegerInput extends React.Component {

  static defaultProps = {
    stylesheet,
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }

  render() {
    let {stylesheet: {Input}, ...props} = this.props;
    return (
      <Input
        {...props}
        value={this.state.value}
        onChange={this.onChange}
        />
    );
  }

  onChange = event => {
    let value = extractValueFromEvent(event);
    this.setState({value: value || ''}, () => {
      if (value !== null) {
        value = tryParseInteger(value);
      }
      this.props.onChange(value);
    });
  }

}
