/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import {style, css}  from './stylesheet';
import theme from './theme';

import ButtonBase from './ButtonBase';

let defaultTextSize = {
  small: 12,
  normal: 14,
  large: 16,
};

let defaultHeight = {
  small: undefined,
  normal: undefined,
  large: undefined,
};

let defaultWidth = {
  small: undefined,
  normal: undefined,
  large: undefined,
};

let stylesheet = {
  raised: true,

  textWidth: 400,
  textSize: defaultTextSize,

  text: css.rgb(130),
  textHover: css.rgb(100),
  textFocus: css.rgb(100),
  textActive: css.rgb(100),
  textDisabled: '#dadada',

  background: css.rgb(255),
  backgroundHover: css.rgb(241),
  backgroundFocus: css.rgb(255),
  backgroundActive: css.rgb(241),
  backgroundDisabled: css.rgb(255),

  border: css.rgb(180),
  borderHover: css.rgb(180),
  borderFocus: css.rgb(180),
  borderActive: css.rgb(200),
  borderDisabled: css.rgb(210),

  shadow: '#b7b7b7',
  shadowHover: '#b7b7b7',
  shadowFocus: '#b7b7b7',
  shadowActive: '#ddd',
  shadowDisabled: '#ddd',
};

function makeStylesheet(stylesheet) {

  let {
    textSize = defaultTextSize,
    height = defaultHeight,
    width = defaultWidth,
  } = stylesheet;

  let buttonSize = {
    small: {
      height: height.small,
      width: width.small,
      padding: css.padding(4, 10),
      fontWeight: stylesheet.textWidth,
      fontSize: textSize.small || textSize,
      boxShadow: css.multi(
        css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadow),
        css.boxShadow(0, 1, 1, 0, stylesheet.shadow)
      ),
      focus: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowFocus),
          css.boxShadow(0, 1, 1, 0, stylesheet.shadowFocus),
        ),
      },
      hover: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowHover),
          css.boxShadow(0, 1, 1, 0, stylesheet.shadowHover),
        ),
      },
      active: {
        boxShadow: css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
        paddingTop: stylesheet.raised ? 6 : 4,
        paddingBottom: stylesheet.raised ? 2 : 4,
      },
      disabled: {
        padding: css.padding(4, 10),
      }
    },

    normal: {
      height: height.normal,
      width: width.normal,
      padding: css.padding(8, 15),
      fontWeight: stylesheet.textWidth,
      fontSize: textSize.normal || textSize,
      boxShadow: css.multi(
        css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadow),
        css.boxShadow(0, 1, 1, 0, stylesheet.shadow),
      ),
      focus: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowFocus),
          css.boxShadow(0, 1, 1, 0, stylesheet.shadowFocus),
        ),
      },
      hover: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowHover),
          css.boxShadow(0, 1, 1, 0, stylesheet.shadowHover),
        ),
      },
      active: {
        boxShadow: css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
        paddingTop: stylesheet.raised ? 10 : 8,
        paddingBottom: stylesheet.raised ? 6 : 8,
      },
      disabled: {
        padding: css.padding(8, 15),
      }
    },

    large: {
      height: height.large,
      width: width.large,
      padding: css.padding(10, 30),
      fontWeight: stylesheet.textWidth,
      fontSize: textSize.large || textSize,
      boxShadow: css.multi(
        css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadow),
        css.boxShadow(0, 2, 3, 0, stylesheet.shadow),
      ),
      focus: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowFocus),
          css.boxShadow(0, 2, 3, 0, stylesheet.shadowFocus),
        ),
      },
      hover: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowHover),
          css.boxShadow(0, 2, 3, 0, stylesheet.shadowHover),
        )
      },
      active: {
        boxShadow: css.insetBoxShadow(0, 2, 3, 0, stylesheet.shadowActive),
        paddingTop: stylesheet.raised ? 12 : 10,
        paddingBottom: stylesheet.raised ? 8 : 10,
      },
      disabled: {
        padding: css.padding(10, 30),
      }
    },
  };

  let colors = {
    background: theme.button.backgroundColor || stylesheet.background,
    color: theme.button.textColor || stylesheet.text,
    border: css.border(1, css.border.solid, theme.button.borderColor || stylesheet.border),
  };

  let hoverColors = {
    background: theme.button.hover.backgroundColor || stylesheet.backgroundHover,
    color: theme.button.hover.textColor || stylesheet.textHover,
    border: css.border(1, css.border.solid, theme.button.hover.borderColor || stylesheet.borderHover),
  };

  let focusColors = {
    background: theme.button.focus.backgroundColor || stylesheet.backgroundFocus,
    color: theme.button.focus.textColor || stylesheet.textFocus,
    border: css.border(1, css.border.solid, theme.button.focus.borderColor || stylesheet.borderFocus),
  };

  let activeColors = {
    background: theme.button.active.backgroundColor || stylesheet.backgroundActive,
    color: theme.button.active.textColor || stylesheet.textActive,
    border: css.border(1, css.border.solid, theme.button.active.borderColor || stylesheet.borderActive),
  };

  let disabledColors = {
    background: theme.button.disabled.backgroundColor || stylesheet.backgroundDisabled,
    color: theme.button.disabled.textColor || stylesheet.textDisabled,
    border: css.border(1, css.border.solid, theme.button.disabled.borderColor || stylesheet.borderDisabled),
  };

  return {
    Root: {
      position: 'relative',
      textAlign: 'center',
      borderRadius: 2,
      ...colors,
      focus: {
        ...focusColors,
        outline: css.none,
        textDecoration: css.none,
      },
      hover: {
        ...hoverColors,
        textDecoration: css.none,
      },
      active: {
        ...activeColors,
        hover: {
          ...activeColors,
        },
        focus: {
          ...activeColors,
        },
      },
      ...buttonSize,
      disabled: {
        ...disabledColors,
        cursor: 'not-allowed',
        boxShadow: css.none,
        hover: {
          ...disabledColors,
          boxShadow: css.none,
        },
        focus: {
          ...disabledColors,
          boxShadow: css.none,
        },
        active: {
          ...disabledColors,
          boxShadow: css.none,
        }
      },
      attachLeft: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: css.none,
        hover: {
          borderLeft: css.none,
        },
        focus: {
          borderLeft: css.none,
        },
        active: {
          borderLeft: css.none,
        },
        disabled: {
          borderLeft: css.none,
        },
      },
      attachRight: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: css.none,
        hover: {
          borderRight: css.none,
        },
        focus: {
          borderRight: css.none,
        },
        active: {
          borderRight: css.none,
        },
        disabled: {
          borderRight: css.none,
        },
      },
      attachTop: {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTop: css.none,
        hover: {
          borderTop: css.none,
        },
        focus: {
          borderTop: css.none,
        },
        active: {
          borderTop: css.none,
        },
        disabled: {
          borderTop: css.none,
        },
      },
      attachBottom: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottom: css.none,
        hover: {
          borderBottom: css.none,
        },
        focus: {
          borderBottom: css.none,
        },
        active: {
          borderBottom: css.none,
        },
        disabled: {
          borderBottom: css.none,
        },
      },

      groupHorizontally: {
        borderRight: 'none !important',
        borderRadius: 0,
        firstChild: {
          borderBottomLeftRadius: 2,
          borderTopLeftRadius: 2,
          borderRight: 'none !important',
        },
        lastChild: {
          borderBottomRightRadius: 2,
          borderTopRightRadius: 2,
          hover: {
            borderRight: css.border(1, stylesheet.borderHover) + ' !important',
          },
          focus: {
            borderRight: css.border(1, stylesheet.borderFocus) + ' !important',
          },
          active: {
            borderRight: css.border(1, stylesheet.borderActive) + ' !important',
          },
          disabled: {
            borderRight: css.border(1, stylesheet.borderDisabled) + ' !important',
          },
          borderRight: css.border(1, stylesheet.border) + ' !important',
        }
      },
      groupVertically: {
        firstChild: {
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottom: css.none,
        },
        lastChild: {
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          borderTop: css.none,
        }
      },
    },

    IconWrapper: {
      position: 'relative',
      top: -1,
      hasCaption: {
        marginRight: 10,
      }
    }
  };
}

function makeButton(stylesheet, options) {
  return style(
    ButtonBase,
    makeStylesheet(stylesheet),
    options
  );
}

let Button = makeButton(stylesheet, {displayName: 'Button'});

Button.style = makeButton;

export default Button;
