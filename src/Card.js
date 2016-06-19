/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import CardBase from './CardBase';
import {style, css} from './stylesheet';
import {padding, fontSize} from './theme';

function styleCard({
  shadow,
  headerColor,
  headerBackground,
  contentColor,
  contentBackground,
  border,
  borderRadius,
}) {
  return {
    Root: {
      position: css.position.relative,
      boxShadow: css.boxShadow(0, 1, 2, 0, shadow),
      border: css.border(1, border),
      borderRadius: borderRadius,
    },
    Header: {
      backgroundColor: headerBackground,
      color: headerColor,
      padding: padding['x-small'],
      fontSize: fontSize['small'],
      fontWeight: 'bold',
    },
    Content: {
      verticalAlign: 'top',
      backgroundColor: contentBackground,
      color: contentColor,
      backgroundClip: 'padding-box',
    },
    Footer: {
      padding: padding['xx-small'],
    }
  };
}

let Card = style(CardBase, styleCard({
  shadow: css.rgba(37, 40, 43, 0.1),
  border: css.rgb(163, 164, 166),
  borderRadius: 2,
  headerBackground: css.rgb(163, 164, 166),
  headerColor: '#fbfbfb',
  contentBackground: 'white',
  contentColor: '#000',
}));

Card.style = function(stylesheet) {
  return style(CardBase, styleCard(stylesheet));
};

export default Card;
