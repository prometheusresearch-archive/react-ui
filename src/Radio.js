/**
 * @copyright 2016-present, Prometheus Research, LLC
 */


import RadioBase from './RadioBase';
import {style} from './stylesheet';
import {margin} from './theme';

export default style(RadioBase, {
  Label: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#444',
    marginLeft: margin['xx-small'],
    userSelect: 'none',
    WebkitUserSelect: 'none',
  }
});
