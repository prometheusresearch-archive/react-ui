/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';

import {createRenderer, spy, assert} from '../testutils';
import Select, {NOVALUE} from '../Select';

describe('react-ui', function() {

  let options = [
    {value: 'a', label: 'A'},
    {value: 'b', label: 'B'}
  ];

  let renderer = null;

  beforeEach(function() {
    renderer = createRenderer();
  });

  describe('<Select />', function() {

    it('renders', function() {
      let onChange = spy();
      let elements;
      renderer.render(
        <Select
          onChange={onChange}
          options={options}
          />
      );

      elements = renderer.findAllWithType('option');
      assert(elements.length === 3);
      assert(elements[0].props.value === NOVALUE);
      assert(elements[1].props.value === 'a');
      assert(elements[2].props.value === 'b');

      assert(renderer.element.props.value === NOVALUE);

      assert(renderer.element.props.onChange);
      renderer.element.props.onChange({target: {value: 'a'}});

      assert(onChange.callCount === 1);
      assert(onChange.lastCall.args[0] === 'a');

      renderer.render(
        <Select
          value="a"
          onChange={onChange}
          options={options}
          />
      );

      elements = renderer.findAllWithType('option');
      assert(elements.length === 2);
      assert(elements[0].props.value === 'a');
      assert(elements[1].props.value === 'b');

      assert(renderer.element.props.value === 'a');

      renderer.render(
        <Select
          allowNoValue
          value="a"
          onChange={onChange}
          options={options}
          />
      );

      elements = renderer.findAllWithType('option');
      assert(elements.length === 3);
      assert(elements[0].props.value === NOVALUE);
      assert(elements[1].props.value === 'a');
      assert(elements[2].props.value === 'b');

      assert(renderer.element.props.value === 'a');

      renderer.element.props.onChange({target: {value: NOVALUE}});
      assert(onChange.callCount === 2);
      assert(onChange.lastCall.args[0] === null);
    });
  });

});


