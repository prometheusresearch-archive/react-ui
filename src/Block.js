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
  height?: number;
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
    paddingLeft: chooseValue(theme.padding, paddingLeft, paddingH, padding),
    paddingRight: chooseValue(theme.padding, paddingRight, paddingH, padding),
    paddingTop: chooseValue(theme.padding, paddingTop, paddingV, padding),
    paddingBottom: chooseValue(theme.padding, paddingBottom, paddingV, padding),
    marginLeft: chooseValue(theme.margin, marginLeft, marginH, margin),
    marginRight: chooseValue(theme.margin, marginRight, marginH, margin),
    marginTop: chooseValue(theme.margin, marginTop, marginV, margin),
    marginBottom: chooseValue(theme.margin, marginBottom, marginV, margin),
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
