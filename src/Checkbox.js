/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import CheckboxBase from './CheckboxBase';
import Block from './Block';
import {style, css} from './stylesheet';
import {margin} from './theme';

export default style(CheckboxBase, {
  Label: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '#444',
    userSelect: 'none',
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
