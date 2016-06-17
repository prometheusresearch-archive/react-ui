/**
 * @copyright 2016, Prometheus Research, LLC
 */

import React from 'react';

import {createRenderer, spy, assert} from '../testutils';
import RadioBase from '../RadioBase';

describe('react-ui', function() {

  let renderer = null;

  beforeEach(function() {
    renderer = createRenderer();
  });

  describe('<RadioBase />', function() {

    it('triggers onChange on input', function() {
      let onChange = spy();
      renderer.render(
        <RadioBase
          value={false}
          onChange={onChange}
          />
      );

      let input = renderer.findWithType('input');
      assert(input.props.onChange);
      input.props.onChange({target: {checked: true}});
      assert(onChange.callCount === 1);
      assert.deepEqual(onChange.lastCall.args, [true]);
    });

    it('triggers onChange on label click', function() {
      let onChange = spy();
      renderer.render(
        <RadioBase
          label="OK"
          value={false}
          onChange={onChange}
          />
      );

      let divs = renderer.findAllWithType('div');
      let label = divs.find(div => div.props.onClick);
      label.props.onClick();
      assert(onChange.callCount === 1);
      assert.deepEqual(onChange.lastCall.args, [true]);
    });

    it('does not triggerd onChange on label click if disabled', function() {
      let onChange = spy();
      renderer.render(
        <RadioBase
          disabled
          label="OK"
          value={false}
          onChange={onChange}
          />
      );

      let divs = renderer.findAllWithType('div');
      let label = divs.find(div => div.props.onClick);
      label.props.onClick();
      assert(onChange.callCount === 0);
    });
  });

});
