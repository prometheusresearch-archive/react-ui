/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import * as React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from '../testutils';
import ButtonBase from '../ButtonBase';

describe('<ButtonBase />', function() {

  it('renders with just caption', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <ButtonBase>OK</ButtonBase>
    );
    let root = renderer.getRenderOutput();
    let [iconWrapper, caption] = root.props.children;
    assert(iconWrapper === null);
    assert(caption.props.children === 'OK');
  });

  it('renders with just icon (text)', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <ButtonBase icon="plus" />
    );
    let root = renderer.getRenderOutput();
    let [{props: {variant: iconVariant, children: icon}}, caption] = root.props.children;
    assert(caption === null);
    assert(icon);
    assert(icon.props.name === 'plus');
    assert(!iconVariant.hasCaption);
  });

  it('renders with just icon (element)', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <ButtonBase icon={<icon />} />
    );
    let root = renderer.getRenderOutput();
    let [{props: {variant: iconVariant, children: icon}}, caption] = root.props.children;
    assert(caption === null);
    assert(icon);
    assert(icon.type === 'icon');
    assert(!iconVariant.hasCaption);
  });

  it('renders with icon and caption', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <ButtonBase icon="plus">Caption</ButtonBase>
    );
    let root = renderer.getRenderOutput();
    let [{props: {variant: iconVariant, children: icon}}, caption] = root.props.children;
    assert(icon);
    assert(icon.props.name === 'plus');
    assert(iconVariant.hasCaption);
    assert(caption.props.children === 'Caption');
  });
});

