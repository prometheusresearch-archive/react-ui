/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import * as React from 'react';
import {isString} from 'lodash';

import {create, css, component} from './stylesheet';

let stylesheet = create({
  Root: component.button({
    display: css.display.inlineBlock,
    verticalAlign: 'bottom',
    cursor: css.cursor.pointer,
    textAlign: css.textAlign.left,
    userSelect: css.none,
    WebkitUserSelect: css.none,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  }),
  Caption: component.div({
    display: css.display.inlineBlock,
  }),
  Icon: 'span',
  IconWrapper: component.div({
    display: css.display.inlineBlock,
  }),
});

/**
 * Button component.
 *
 * Button is clickable element with optional icon and/or caption.
 */
export default class ButtonBase extends React.Component {

  static propTypes = {
    /**
     * If button should be rendered as being pressed.
     */
    active: React.PropTypes.bool,

    /**
     * Button size.
     */
    size: React.PropTypes.oneOf(['small', 'normal', 'large']),

    /**
     * Button's icon.
     */
    icon: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.node
    ]),

    /**
     * Button's caption.
     */
    children: React.PropTypes.node,
  };

  static defaultProps = {
    size: 'normal',
    attach: {},
    stylesheet,
  };

  render() {
    let {
      children, icon, iconRight,
      disabled, active, size,
      attach,
      groupVertically, groupHorizontally,
      variant,
      stylesheet: {Root, Caption, Icon, IconWrapper},
      ...props
    } = this.props;
    let sizeVariant = {
      small: size === 'small',
      normal: size === 'normal',
      large: size === 'large',
    };
    variant = {
      active, disabled,
      attachLeft: attach.left,
      attachRight: attach.right,
      attachTop: attach.top,
      attachBottom: attach.bottom,
      groupVertically,
      groupHorizontally,
      ...sizeVariant,
      ...variant,
    };
    if (isString(icon)) {
      icon = <Icon name={icon} />;
    }
    if (isString(iconRight)) {
      iconRight = <Icon name={iconRight} />;
    }
    let caption = null;
    if (children) {
      caption = <Caption>{children}</Caption>;
    }
    let hasCaption = !!children;
    return (
      <Root
        {...props}
        disabled={disabled}
        variant={variant}
        aria-pressed={active}
        role="button">
        {icon ?
          <IconWrapper variant={{...sizeVariant, hasCaption, leftPosition: true}}>
            {icon}
          </IconWrapper> :
          null}
        {caption}
        {iconRight ?
          <IconWrapper variant={{...sizeVariant, hasCaption, rightPosition: true}}>
            {iconRight}
          </IconWrapper> :
          null}
      </Root>
    );
  }
}

