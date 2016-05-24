/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import * as React from 'react';
import * as Stylesheet from 'react-stylesheet';

import {
  tryParseNumber,
  extractValueFromEvent
} from './FormUtils';

let stylesheet = Stylesheet.create({
  Input: 'input',
});

export default class NumberInput extends React.Component {

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

  componentWillReceiveProps(nextProps) {
    let {value} = this.state;
    if (nextProps.value === undefined) {
      this.setState({value: ''});
    } else if (nextProps.value !== tryParseNumber(value)) {
      this.setState({value: String(nextProps.value)});
    }
  }

  onChange = event => {
    let value = extractValueFromEvent(event);
    this.setState({value: value || ''}, () => {
      if (value !== null) {
        value = tryParseNumber(value);
      }
      this.props.onChange(value);
    });
  }
}


