/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import {style, css} from './stylesheet';
import Button from './Button';

export default style(Button, {
  raised: true,

  textWidth: 300,

  text: css.rgb(255, 237, 237),
  textHover: css.rgb(255),
  textFocus: css.rgb(255),
  textActive: css.rgb(241, 203, 203),
  textDisabled: css.rgb(255),

  background: css.rgb(210, 77, 77),
  backgroundHover: css.rgb(210, 77, 77),
  backgroundFocus: css.rgb(210, 77, 77),
  backgroundActive: css.rgb(210, 77, 77),
  backgroundDisabled: css.rgb(226, 135, 135),

  border: css.rgb(210, 77, 77),
  borderHover: css.rgb(173, 48, 48),
  borderFocus: css.rgb(173, 48, 48),
  borderActive: css.rgb(173, 48, 48),
  borderDisabled: css.rgb(226, 135, 135),

  shadow: css.none,
  shadowHover: css.none,
  shadowFocus: css.none,
  shadowActive: css.rgb(134, 3, 3),
  shadowDisabled: css.none,
}, 'FlatDangerButton');

