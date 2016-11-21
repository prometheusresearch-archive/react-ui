/**
 * @copyright 2016-present, Prometheus Research, LLC
 * @flow
 */

import type {fontSize, fontWidth} from 'react-stylesheet/lib/CSSType';

import * as React from 'react';

import * as theme from './theme';
import {chooseValue} from './Utils';

type Props = {
  fontSize: fontSize;
  fontWidth: fontWidth;
  color: string;
  style: Object;
};

export default function Text({
  fontSize,
  fontWidth,
  color,
  style,
  ...props
}: Props) {
  style = {
    fontSize: chooseValue(theme.fontSize, fontSize),
    fontWidth,
    color,
    ...style,
  };
  return <span {...props} style={style} />;
}
