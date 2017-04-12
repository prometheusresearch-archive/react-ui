/**
 * @flow
 */

import type {Component} from 'react';
import {findDOMNode} from 'react-dom';

export default function findHTMLElement(
  component: HTMLElement | Component<*, *, *>,
): ?HTMLElement {
  const node = findDOMNode(component);
  if (node instanceof HTMLElement) {
    return node;
  } else {
    return null;
  }
}
