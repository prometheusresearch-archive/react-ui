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
     * Button's alternative icon (placed at the opposite direction to the
     * label).
     */
    iconAlt: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.node
    ]),

    href: React.PropTypes.string,

    Component: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.func,
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
      children, icon, iconAlt = this.props.iconRight,
      disabled, active, size,
      attach,
      href,
      Component,
      groupVertically, groupHorizontally,
      variant,
      stylesheet: {Root, Caption, Icon, IconWrapper},
      textAlign, width, height,
      style,
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
    style = {
      width, height,
      textAlign,
      ...style,
    };
    if (href != null && Component == null) {
      Component = 'a';
    }
    if (isString(icon)) {
      icon = <Icon name={icon} />;
    }
    if (isString(iconAlt)) {
      iconAlt = <Icon name={iconAlt} />;
    }
    let caption = null;
    if (children) {
      caption = <Caption>{children}</Caption>;
    }
    let hasCaption = !!children;
    return (
      <Root
        Component={Component}
        {...props}
        href={href}
        disabled={disabled}
        variant={variant}
        style={style}
        aria-pressed={active}
        role="button">
        {icon ?
          <IconWrapper variant={{...sizeVariant, hasCaption, leftPosition: true}}>
            {icon}
          </IconWrapper> :
          null}
        {caption}
        {iconAlt ?
          <IconWrapper variant={{...sizeVariant, hasCaption, rightPosition: true}}>
            {iconAlt}
          </IconWrapper> :
          null}
      </Root>
    );
  }
}

