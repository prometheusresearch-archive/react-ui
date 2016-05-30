/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import Block from './Block';
import {style, css} from './stylesheet';

export default style(Block, {
  verticalAlign: 'top',
  position: css.position.relative,
  border: css.border(1, css.rgba(37, 40, 43, 0.1)),
  borderRadius: 2,
  boxShadow: css.boxShadow(0, 1, 2, 0, css.rgba(37, 40, 43, 0.1)),
  backgroundColor: 'white',
  backgroundClip: 'padding-box',
}, 'Card');
