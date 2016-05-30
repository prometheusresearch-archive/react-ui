/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import CheckboxGroupBase from './CheckboxGroupBase';
import Checkbox from './Checkbox';
import {style} from './stylesheet';
import {margin} from './theme';

export default style(CheckboxGroupBase, {
  Checkbox: Checkbox,
  CheckboxWrapper: {
    vertical: {
      marginBottom: margin['xx-small'],
    },
    horizontal: {
      display: 'inline-block',
      marginRight: margin['x-small'],
    },
  }
});
