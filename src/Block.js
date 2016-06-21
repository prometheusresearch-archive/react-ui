/**
 * @copyright 2016-present, Prometheus Research, LLC
 * @flow
 */

import * as React from 'react';
import {wrapWithStylesheet} from './stylesheet';
import {chooseValue} from './Utils';
import * as theme from './theme';

type Props = {
  inline?: boolean;
  noWrap?: boolean;
  position?: 'relative' | 'absolute' | 'fixed',
  width?: number;
  maxWidth?: number;
  minWidth?: number;
  height?: number;
  maxHeight?: number;
  minHeight?: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  padding?: string | number;
  paddingV?: string | number;
  paddingH?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  margin?: string | number;
  marginV?: string | number;
  marginH?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  textAlign?: 'left' | 'right' | 'center',
  verticalAlign?: string;
  style?: Object;
};

export default function Block({
  inline,
  noWrap,
  position = 'relative',
  width, maxWidth, minWidth,
  height, maxHeight, minHeight,
  top, left, bottom, right,
  padding,
  paddingV, paddingH,
  paddingLeft, paddingRight, paddingTop, paddingBottom,
  margin,
  marginV, marginH,
  marginLeft, marginRight, marginTop, marginBottom,
  textAlign,
  verticalAlign,
  style,
  ...props
}: Props) {

  style = {
    paddingLeft: chooseValue(theme.padding, paddingLeft, paddingH, padding),
    paddingRight: chooseValue(theme.padding, paddingRight, paddingH, padding),
    paddingTop: chooseValue(theme.padding, paddingTop, paddingV, padding),
    paddingBottom: chooseValue(theme.padding, paddingBottom, paddingV, padding),
    marginLeft: chooseValue(theme.margin, marginLeft, marginH, margin),
    marginRight: chooseValue(theme.margin, marginRight, marginH, margin),
    marginTop: chooseValue(theme.margin, marginTop, marginV, margin),
    marginBottom: chooseValue(theme.margin, marginBottom, marginV, margin),
    display: inline ? 'inline-block' : undefined,
    whiteSpace: noWrap ? 'nowrap' : undefined,
    position,
    width, minWidth, maxWidth,
    height, minHeight, maxHeight,
    top, left, bottom, right,
    textAlign,
    verticalAlign,
    ...style,
  };
  return <div {...props} style={style} />;
}

Block.style = function style(stylesheet, displayName) {
  return wrapWithStylesheet(Block, stylesheet, displayName || 'Block');
};
