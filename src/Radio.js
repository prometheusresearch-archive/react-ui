/**
 * @copyright 2016-present, Prometheus Research, LLC
 */


import RadioBase from './RadioBase';
import Block from './Block';
import {style, css} from './stylesheet';
import {margin} from './theme';

export default style(RadioBase, {
  Label: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#444',
  },
  Input: {
    verticalAlign: 'middle',
  },
  LabelWrapper: style(Block, {
    cursor: css.cursor.default,
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: margin['x-small'],
    userSelect: 'none',
  }),
  Hint: {
    fontSize: '0.6rem'
  }
});
