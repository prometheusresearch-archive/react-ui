/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import Card from './Card';
import {style, css} from './stylesheet';

export default style(Card, {
  shadow: css.rgba(37, 40, 43, 0.1),
  border: css.rgb(40, 172, 33),
  borderRadius: 2,
  headerBackground: css.rgb(40, 172, 33),
  headerColor: '#ffffff',
  contentBackground: 'white',
  contentColor: '#000',
});
