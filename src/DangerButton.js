/**
 * @copyright 2015, Prometheus Research, LLC
 */

import Button from './Button';
import {css, style} from './stylesheet';

let textColor = css.rgb(255, 231, 231);

export default style(Button, {
  raised: true,

  textWidth: 300,

  text: textColor,
  textHover: textColor,
  textFocus: textColor,
  textActive: css.rgb(241, 203, 203),
  textDisabled: textColor,

  background: css.rgb(210, 77, 77),
  backgroundHover: css.rgb(173, 48, 48),
  backgroundFocus: css.rgb(210, 77, 77),
  backgroundActive: css.rgb(173, 48, 48),
  backgroundDisabled: css.rgb(226, 135, 135),

  border: css.rgb(191, 55, 55),
  borderHover: css.rgb(146, 39, 39),
  borderFocus: css.rgb(146, 39, 39),
  borderActive: css.rgb(146, 39, 39),
  borderDisabled: css.rgb(226, 135, 135),

  shadow: css.rgb(210, 77, 77),
  shadowHover: css.rgb(173, 48, 48),
  shadowFocus: css.rgb(173, 48, 48),
  shadowActive: css.rgb(70, 21, 20),
}, {displayName: 'DangerButton'});
