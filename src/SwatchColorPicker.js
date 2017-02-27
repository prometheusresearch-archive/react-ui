/**
 * @flow
 */

import * as React from 'react';
import {Element, HBox} from 'react-stylesheet';
import * as Dropdown from './dropdown';

export default class SwatchColorPicker extends React.Component {
  props: {
    value: ?string,
    onChange: (string) => *,
    colorList: Array<string>,
    menuSize: number,
    swatchWidth: number,
    swatchHeight: number,
  };

  static defaultProps = {
    swatchWidth: 25,
    swatchHeight: 25,
    menuSize: 8,
  };

  onSelection = (value: string) => {
    this.props.onChange(value);
  };

  render() {
    const {value, colorList, menuSize, swatchWidth, swatchHeight} = this.props;
    return (
      <Dropdown.Wrapper onSelection={this.onSelection}>
        <Dropdown.Button
          tag={ColorSwatch}
          width={swatchWidth}
          height={swatchHeight}
          color={value ? value : '#000'}
        />
        <Dropdown.Menu>
          <ColorMenu
            size={menuSize}
            colorList={colorList}
            swatchWidth={swatchWidth}
            swatchHeight={swatchHeight}
          />
        </Dropdown.Menu>
      </Dropdown.Wrapper>
    );
  }
}

class ColorMenu extends React.Component {
  render() {
    const {colorList, size, swatchWidth, swatchHeight} = this.props;
    const menu = colorList.map(color => (
      <Dropdown.MenuItem
        tag={ColorSwatch}
        key={color}
        value={color}
        color={color}
        width={swatchWidth}
        height={swatchHeight}
      />
    ));
    const borderWidth = 1;
    const padding = 5;
    return (
      <HBox
        overflow="visible"
        flexWrap="wrap"
        lineHeight={0}
        boxShadow="rgba(0, 0, 0, 0.14902) 0px 3px 12px"
        borderRadius={2}
        padding={padding}
        border={{width: borderWidth, style: 'solid', color: 'rgba(0, 0, 0, 0.2)'}}
        background="#fff"
        position="absolute"
        left={3}
        zIndex={100}
        width={swatchWidth * size + 2 * borderWidth + 2 * padding}>
        <Element
          position="absolute"
          borderTop={{width: 8, style: 'solid', color: 'transparent'}}
          borderLeft={{width: 8, style: 'solid', color: 'transparent'}}
          borderRight={{width: 8, style: 'solid', color: 'transparent'}}
          borderBottom={{
            width: 8,
            style: 'solid',
            color: 'rgba(0, 0, 0, 0.14902)',
          }}
          top={-16}
          left={9}
        />
        <Element
          position="absolute"
          borderTop={{width: 7, style: 'solid', color: 'transparent'}}
          borderLeft={{width: 7, style: 'solid', color: 'transparent'}}
          borderRight={{width: 7, style: 'solid', color: 'transparent'}}
          borderBottom={{
            width: 7,
            style: 'solid',
            color: 'rgb(255, 255, 255)',
          }}
          top={-14}
          left={10}
        />
        {menu}
      </HBox>
    );
  }
}

class ColorSwatch extends React.Component {
  static defaultProps = {
    width: 25,
    height: 25,
  };

  render() {
    const {color, width, height, ...props} = this.props;
    return (
      <Element
        {...props}
        display="inline-block"
        width={width}
        height={height}
        zIndexOnHover={10}
        boxShadowOnHover="rgba(0, 0, 0, 0.25) 0px 0px 5px 2px"
        positionOnHover="relative"
        outlineOnHover="rgb(255, 255, 255) solid 2px"
        outlineOnActive="rgb(255, 255, 255) solid 2px"
        outlineOnFocus="rgb(255, 255, 255) solid 2px">
        <Element background={color ? color : '#000'} width="100%" height="100%" />
      </Element>
    );
  }
}
