/**
 * @copyright 2016-present, Prometheus Research, LLC
 * @flow
 */

import React from 'react';
import {createRenderer, assert} from '../testutils';
import Block from '../Block';

declare function describe(): any;
declare function it(): any;

describe('react-ui/Block', function() {

  describe('i18n props', function() {

    it('processes positionStart/positionEnd', function() {
      let renderer = createRenderer();
      renderer.render(<Block positionStart={10} positionEnd={11} />);
      assert(renderer.element.props.style.left === 10);
      assert(renderer.element.props.style.right === 11);
      renderer.render(<Block positionStart={10} positionEnd={11} />, {
        i18n: {dir: 'rtl'}
      });
      assert(renderer.element.props.style.left === 11);
      assert(renderer.element.props.style.right === 10);
    });

    it('processes paddingStart/paddingEnd', function() {
      let renderer = createRenderer();
      renderer.render(<Block paddingStart={10} paddingEnd={11} />);
      assert(renderer.element.props.style.paddingLeft === 10);
      assert(renderer.element.props.style.paddingRight === 11);
      renderer.render(<Block paddingStart={10} paddingEnd={11} />, {
        i18n: {dir: 'rtl'}
      });
      assert(renderer.element.props.style.paddingLeft === 11);
      assert(renderer.element.props.style.paddingRight === 10);
    });

    it('processes marginStart/marginEnd', function() {
      let renderer = createRenderer();
      renderer.render(<Block marginStart={10} marginEnd={11} />);
      assert(renderer.element.props.style.marginLeft === 10);
      assert(renderer.element.props.style.marginRight === 11);
      renderer.render(<Block marginStart={10} marginEnd={11} />, {
        i18n: {dir: 'rtl'}
      });
      assert(renderer.element.props.style.marginLeft === 11);
      assert(renderer.element.props.style.marginRight === 10);
    });

    it('processes textAlign="start"', function() {
      let renderer = createRenderer();
      renderer.render(<Block textAlign="start" />);
      assert(renderer.element.props.style.textAlign === 'left');
      renderer.render(<Block textAlign="start" />, {
        i18n: {dir: 'rtl'}
      });
      assert(renderer.element.props.style.textAlign === 'right');
    });

    it('processes textAlign="end"', function() {
      let renderer = createRenderer();
      renderer.render(<Block textAlign="end" />);
      assert(renderer.element.props.style.textAlign === 'right');
      renderer.render(<Block textAlign="end" />, {
        i18n: {dir: 'rtl'}
      });
      assert(renderer.element.props.style.textAlign === 'left');
    });

  });

});
