/**
 * @copyright 2016-present, Prometheus Research, LLC
 * @flow
 */

import type {fontWeight} from 'react-stylesheet/lib/CSSType';
import {style, css}  from 'react-stylesheet';
import {stylesheet as StylesheetBase} from './ButtonBase';
import theme from './theme';

export type FontSize = {
  xSmall: number;
  small: number;
  normal: number;
  large: number;
};

export type Size = {
  xSmall: number;
  small: number;
  normal: number;
  large: number;
};

export type ButtonStylesheet = {
  raised: boolean;

  width?: Size;
  height?: Size;

  borderRadius?: number;

  textWidth: fontWeight;
  textSize?: FontSize | string;

  text: string;
  textHover: string;
  textFocus: string;
  textActive: string;
  textDisabled: string;

  background: string;
  backgroundHover: string;
  backgroundFocus: string;
  backgroundActive: string;
  backgroundDisabled: string;

  border?: string;
  borderHover?: string;
  borderFocus?: string;
  borderActive?: string;
  borderDisabled?: string;

  shadow?: string;
  shadowHover?: string;
  shadowFocus?: string;
  shadowActive?: string;

  shadowFocusRing?: string;
};

let defaultTextSize: FontSize = {
  xSmall: 10,
  small: 12,
  normal: 14,
  large: 16,
};

let defaultBorderRadius = 2;

let defaultHeight = {
  xSmall: undefined,
  small: undefined,
  normal: undefined,
  large: undefined,
};

let defaultWidth = {
  xSmall: undefined,
  small: undefined,
  normal: undefined,
  large: undefined,
};

export function create(stylesheet: ButtonStylesheet) {

  let {
    textSize = defaultTextSize,
    height = defaultHeight,
    width = defaultWidth,
    borderRadius = defaultBorderRadius,
    shadowFocusRing = 'none',
  } = stylesheet;

  let colors = {
    background: (
      theme.button.backgroundColor ||
      stylesheet.background
    ),
    color: (
      theme.button.textColor ||
      stylesheet.text
    ),
    border: css.border(
      1, css.border.solid,
      theme.button.borderColor ||
      stylesheet.border
    ),
  };

  let hoverColors = {
    background: (
      theme.button.hover.backgroundColor ||
      stylesheet.backgroundHover ||
      stylesheet.background
    ),
    color: (
      theme.button.hover.textColor ||
      stylesheet.textHover ||
      stylesheet.text
    ),
    border: css.border(
      1, css.border.solid,
      theme.button.hover.borderColor ||
      stylesheet.borderHover ||
      stylesheet.border
    ),
  };

  let focusColors = {
    background: (
      theme.button.focus.backgroundColor ||
      stylesheet.backgroundFocus ||
      stylesheet.background
    ),
    color: (
      theme.button.focus.textColor ||
      stylesheet.textFocus ||
      stylesheet.text
    ),
    border: css.border(
      1, css.border.solid,
      theme.button.focus.borderColor ||
      stylesheet.borderFocus ||
      stylesheet.border
    ),
  };

  let activeColors = {
    background: (
      theme.button.active.backgroundColor ||
      stylesheet.backgroundActive ||
      stylesheet.background
    ),
    color: (
      theme.button.active.textColor ||
      stylesheet.textActive ||
      stylesheet.text
    ),
    border: css.border(
      1, css.border.solid,
      theme.button.active.borderColor ||
      stylesheet.borderActive ||
      stylesheet.border
    ),
  };

  let disabledColors = {
    background: (
      theme.button.disabled.backgroundColor ||
      stylesheet.backgroundDisabled ||
      stylesheet.background
    ),
    color: (
      theme.button.disabled.textColor ||
      stylesheet.textDisabled ||
      stylesheet.text
    ),
    border: css.border(
      1, css.border.solid,
      theme.button.disabled.borderColor ||
      stylesheet.borderDisabled ||
      stylesheet.border
    ),
  };

  let IconWrapper = style(StylesheetBase.IconWrapper, {
    base: {
      position: 'relative',
      top: -1,
    },
  });

  let Root = style(StylesheetBase.Root, {

    base: {
      position: 'relative',
      textAlign: 'center',
      borderRadius: borderRadius,
      ...colors,
      focus: {
        ...focusColors,
        zIndex: 1,
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
    },
    xSmall: {
      height: height.xSmall,
      width: width.xSmall,
      lineHeight: 1.2,
      padding: css.padding(2, 6),
      fontWeight: stylesheet.textWidth,
      fontSize: typeof textSize === 'string' ? textSize : textSize.xSmall,
      boxShadow: css.multi(
        css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadow),
        css.boxShadow(0, 1, 1, 0, stylesheet.shadow)
      ),
      hover: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowHover),
          css.boxShadow(0, 1, 1, 0, stylesheet.shadowHover),
        ),
      },
      focus: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowFocus),
          shadowFocusRing,
        ),
      },
      active: {
        boxShadow: css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
        hover: {
          boxShadow: css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
        },
        focus: {
          boxShadow: css.multi(
            css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
            shadowFocusRing,
          ),
        }
      },
      disabled: {
        padding: css.padding(2, 6),
      }
    },

    small: {
      height: height.small,
      width: width.small,
      lineHeight: 1.2,
      padding: css.padding(4, 10),
      fontWeight: stylesheet.textWidth,
      fontSize: typeof textSize === 'string' ? textSize : textSize.small,
      boxShadow: css.multi(
        css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadow),
        css.boxShadow(0, 1, 1, 0, stylesheet.shadow)
      ),
      hover: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowHover),
          css.boxShadow(0, 1, 1, 0, stylesheet.shadowHover),
        ),
      },
      focus: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowFocus),
          shadowFocusRing,
        ),
      },
      active: {
        boxShadow: css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
        paddingTop: stylesheet.raised ? 6 : 4,
        paddingBottom: stylesheet.raised ? 2 : 4,
        hover: {
          boxShadow: css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
        },
        focus: {
          boxShadow: css.multi(
            css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
            shadowFocusRing,
          ),
        }
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
      fontSize: typeof textSize === 'string' ? textSize : textSize.normal,
      lineHeight: 1.3,
      boxShadow: css.multi(
        css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadow),
        css.boxShadow(0, 1, 1, 0, stylesheet.shadow),
      ),
      hover: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowHover),
          css.boxShadow(0, 1, 1, 0, stylesheet.shadowHover),
        ),
      },
      focus: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowFocus),
          shadowFocusRing,
        ),
      },
      active: {
        boxShadow: css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
        paddingTop: stylesheet.raised ? 10 : 8,
        paddingBottom: stylesheet.raised ? 6 : 8,
        hover: {
          boxShadow: css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
        },
        focus: {
          boxShadow: css.multi(
            css.insetBoxShadow(0, 1, 1, 0, stylesheet.shadowActive),
            shadowFocusRing,
          ),
        }
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
      fontSize: typeof textSize === 'string' ? textSize : textSize.large,
      lineHeight: 1.3,
      boxShadow: css.multi(
        css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadow),
        css.boxShadow(0, 2, 3, 0, stylesheet.shadow),
      ),
      hover: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowHover),
          css.boxShadow(0, 2, 3, 0, stylesheet.shadowHover),
        )
      },
      focus: {
        boxShadow: css.multi(
          css.insetBoxShadow(0, -2, 9, -4, stylesheet.shadowFocus),
          shadowFocusRing,
        ),
      },
      active: {
        boxShadow: css.insetBoxShadow(0, 3, 3, 0, stylesheet.shadowActive),
        paddingTop: stylesheet.raised ? 12 : 10,
        paddingBottom: stylesheet.raised ? 8 : 10,
        hover: {
          boxShadow: css.insetBoxShadow(0, 3, 3, 0, stylesheet.shadowActive),
        },
        focus: {
          boxShadow: css.multi(
            css.insetBoxShadow(0, 3, 3, 0, stylesheet.shadowActive),
            shadowFocusRing,
          ),
        }
      },
      disabled: {
        padding: css.padding(10, 30),
      }
    },
    groupHorizontally_ltr: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      lastChild: {
        borderLeft: 'none',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }
    },
    groupHorizontally_rtl: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      lastChild: {
        borderRight: 'none',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }
    },
    groupVertically: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      lastChild: {
        borderTop: 'none',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      }
    },
  });

  return {
    ...StylesheetBase,

    Root,
    IconWrapper,
  };
}

