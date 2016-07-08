/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash/debounce';

import * as Focus from './Focus';
import Block from './Block';
import {InputChrome} from './Input';
import {style, css} from './stylesheet';

let AutosuggestInput = style('input', {
  height: '100%',
  width: '100%',
  border: css.none,
  padding: css.padding(6, 12),
  margin: 0,
  focus: {
    outline: css.none,
  },
});

let AutosuggestRoot = style(InputChrome, {
  Component: Block,
  padding: 0,
});

let AutosuggestListWrapper = style(Block, {
  border: css.border(1, '#ccc'),
  width: '100%',
  top: '110%',
  backgroundColor: 'white',
  boxShadow: css.boxShadow(0, 1, 2, 0, css.rgba(37, 40, 43, 0.1)),
});

export default class Autosuggest extends React.Component {

  static defaultProps = {
    tabIndex: 0,
    stylesheet: {
      Root: AutosuggestRoot,
      Input: AutosuggestInput,
      ListWrapper: AutosuggestListWrapper,
    }
  };

  constructor(props, context) {
    super(props, context);
    this.root = null;
    this.input = null;
    this.state = {
      focus: false,
      focusedItem: null,
      show: false,
      items: [],
    };
    this.setFocus = debounce(focus => {
      this.setState(state => {
        if (state.focus) {
          return {...state, focus};
        } else {
          return {...state, focus, show: true};
        }
      });
    });
  }

  render() {
    let {value, tabIndex, stylesheet} = this.props;
    let {items, focus, focusedItem, show} = this.state;
    let {Root, Input, ListWrapper} = stylesheet;
    items = [
      {label: 'Dogs', value: 'dogs'},
      {label: 'Doggie', value: 'doggie'},
      {label: 'Cats', value: 'cat'},
    ];
    return (
      <Focus.FocusableList tabIndex={tabIndex} ref={root => this.root = root}>
        <Root variant={{focus}}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onClick={this.onClick}
          onKeyDown={this.onKeyDown}>
          <Focus.Focusable focusIndex={1} ref={input => this.input = input}>
            <Input
              tabIndex={-1}
              value={focusedItem ? focusedItem.label : value || ''}
              onChange={this.onChange}
              />
          </Focus.Focusable>
          {focus && show &&
            <ListWrapper position="absolute" variant={{focus}}>
              <AutosuggestList
                items={items}
                onSelect={this.onSelectItem}
                onFocus={this.onFocusItem}
                onBlur={this.onBlurItem}
              />
            </ListWrapper>}
        </Root>
      </Focus.FocusableList>
    );
  }

  componentDidUpdate() {
    if (this.state.focusedItem) {
      this.selectAll();
    }
  }

  onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        if (!this.state.show) {
          this.setState({show: true}, () => {
            this.root.focusNext();
          });
        }
        break;
    }
  };

  selectAll() {
    if (this.input) {
      let input = ReactDOM.findDOMNode(this.input);
      input.setSelectionRange(0, input.value.length);
    }
  }

  selectNone() {
    if (this.input) {
      let input = ReactDOM.findDOMNode(this.input);
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }

  onSelectItem = (item) => {
    this.setState({show: false});
    ReactDOM.findDOMNode(this).focus();
    this.selectNone();
    if (item !== null) {
      this.props.onChange(item.label);
    }
  };

  onFocusItem = (item) => {
    this.setState({
      focusedItem: item
    });
  };

  onBlurItem = (_item) => {
    this.setState({
      focusedItem: null
    });
  };

  onChange = (ev) => {
    let value = ev.target.value;
    if (!this.state.show) {
      this.setState({show: true});
    }
    this.props.onChange(value === '' ? null : value);
  };

  onClick = () => {
    if (!this.state.show) {
      this.setState({show: true});
    }
  };

  onFocus = () => {
    this.setFocus(true);
  };

  onBlur = () => {
    this.setFocus(false);
  };
}

let AutosuggestListItemRoot = style(Block, {
  backgroundColor: 'white',
  padding: css.padding(6, 12),
  hover: {
    backgroundColor: '#ddd',
  },
  focus: {
    outline: css.none,
    backgroundColor: '#ddd',
  },
});

export class AutosuggestListItem extends React.Component {

  static defaultProps = {
    stylesheet: {
      Root: AutosuggestListItemRoot,
    }
  };

  render() {
    let {item: {label}, index, stylesheet} = this.props;
    let {Root} = stylesheet;
    return (
      <Focus.Focusable focusIndex={index}>
        <Root
          tabIndex={-1}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onClick={this.onClick}
          onKeyDown={this.onKeyDown}>
          {label}
        </Root>
      </Focus.Focusable>
    );
  }

  onClick = () => {
    this.props.onSelect(this.props.item);
  };

  onFocus = () => {
    this.props.onFocus(this.props.item);
  };

  onBlur = () => {
    this.props.onBlur(this.props.item);
  };

  onKeyDown = (ev) => {
    switch (ev.key) {
      case 'Enter':
        ev.preventDefault();
        ev.stopPropagation();
        this.props.onSelect(this.props.item);
        break;
      case 'Backspace':
      case 'Esc':
        ev.preventDefault();
        ev.stopPropagation();
        this.props.onSelect(null);
        break;
    }
  };
}

let AutosuggestListRoot = style(Block, {
});

export class AutosuggestList extends React.Component {

  static defaultProps = {
    stylesheet: {
      Root: AutosuggestListRoot,
      Item: AutosuggestListItem,
    },
  };

  render() {
    let {stylesheet, items, onSelect, onFocus, onBlur} = this.props;
    let {Root, Item} = stylesheet;
    items = items.map((item, index) =>
      <Item
        key={item.value}
        index={index + 2}
        item={item}
        onSelect={onSelect}
        onFocus={onFocus}
        onBlur={onBlur}
        />
    );
    return (
      <Root>
        {items}
      </Root>
    );
  }
}
