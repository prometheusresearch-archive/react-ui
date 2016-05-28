/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import {style, css} from './stylesheet';
import Button from './Button';

export default style(Button, {
  raised: true,

  textWidth: 300,

  text: css.rgb(173),
  textHover: css.rgb(130),
  textFocus: css.rgb(154),
  textActive: css.rgb(173),
  textDisabled: '#dadada',

  background: css.rgb(255),
  backgroundHover: css.rgb(241),
  backgroundFocus: css.rgb(255),
  backgroundActive: css.rgb(241),
  backgroundDisabled: css.rgb(255),

  border: css.rgb(234),
  borderHover: css.rgb(224),
  borderFocus: css.rgb(204),
  borderActive: css.rgb(224),
  borderDisabled: '#ececec',

  shadow: css.none,
  shadowHover: css.none,
  shadowFocus: css.none,
  shadowActive: '#ddd',
  shadowDisabled: css.none,
}, 'FlatButton');
