/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import RadioGroupBase from './RadioGroupBase';
import Radio from './Radio';
import {style} from './stylesheet';
import {margin} from './theme';

export default style(RadioGroupBase, {
  Radio: Radio,
  RadioWrapper: {
    vertical: {
      marginBottom: margin['xx-small'],
    },
    horizontal: {
      display: 'inline-block',
      marginRight: margin['x-small'],
    },
  }
});
