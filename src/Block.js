/**
 * @copyright 2016-present, Prometheus Research, LLC
 * @flow
 */

import * as React from 'react';
import {wrapWithStylesheet} from './stylesheet';

export const size = {
  'xx-small': 4,
  'x-small': 8,
  'small': 16,
  'medium': 24,
  'large': 32,
  'x-large': 64,
  'xx-large': 96,
};

function chooseSize_(name) {
  return name != null ? size[name] : undefined;
}

function chooseSize(a, b, c) {
  let val = chooseSize_(a);
  if (val == null) {
    val  = chooseSize_(b);
    if (val == null) {
      val = chooseSize_(c);
    }
  }
  return val;
}

type Props = {
  inline?: boolean;
  noWrap?: boolean;
  position?: 'relative' | 'absolute' | 'fixed',
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  padding?: number;
  paddingV?: number;
  paddingH?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  margin?: number;
  marginV?: number;
  marginH?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  textAlign?: 'left' | 'right' | 'center',
  style?: Object;
};

export default function Block({
  inline,
  noWrap,
  position = 'relative',
  width, height, top, left, bottom, right,
  padding,
  paddingV, paddingH,
  paddingLeft, paddingRight, paddingTop, paddingBottom,
  margin,
  marginV, marginH,
  marginLeft, marginRight, marginTop, marginBottom,
  textAlign,
  style,
  ...props
}: Props) {

  style = {
    paddingLeft: chooseSize(paddingLeft, paddingH, padding),
    paddingRight: chooseSize(paddingRight, paddingH, padding),
    paddingTop: chooseSize(paddingTop, paddingV, padding),
    paddingBottom: chooseSize(paddingBottom, paddingV, padding),
    marginLeft: chooseSize(marginLeft, marginH, margin),
    marginRight: chooseSize(marginRight, marginH, margin),
    marginTop: chooseSize(marginTop, marginV, margin),
    marginBottom: chooseSize(marginBottom, marginV, margin),
    display: inline ? 'inline-block' : 'block',
    whiteSpace: noWrap ? 'nowrap' : undefined,
    position,
    width, height, top, left, bottom, right,
    textAlign,
    ...style,
  };
  return <div {...props} style={style} />;
}

Block.style = function style(stylesheet, displayName) {
  return wrapWithStylesheet(Block, stylesheet, displayName || 'Block');
};
