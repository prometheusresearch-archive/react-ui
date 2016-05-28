import 'normalize.css/normalize.css';
import React from 'react';
import * as ReactUI from '../src/index';

function Block({children}) {
  return (
    <div style={{marginBottom: 10}}>
      {children}
    </div>
  );
}

function Item({children}) {
  return (
    <div style={{display: 'inline-block', marginRight: 10}}>
      {children}
    </div>
  );
}

export default function Site() {
  return (
    <div>
      <Block>
        <Item>
          <ReactUI.Button size="small">Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button size="small" variant={{hover: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button size="small" variant={{focus: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button size="small" variant={{active: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button size="small" disabled>Button</ReactUI.Button>
        </Item>

      </Block>

      <Block>
        <Item>
          <ReactUI.Button groupHorizontally size="small">Left</ReactUI.Button>
          <ReactUI.Button groupHorizontally size="small">Center</ReactUI.Button>
          <ReactUI.Button groupHorizontally size="small">Right</ReactUI.Button>
        </Item>
      </Block>

      <Block>
        <Item>
          <ReactUI.Button>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button variant={{hover: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button variant={{focus: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button variant={{active: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button disabled>Button</ReactUI.Button>
        </Item>
      </Block>
      <Block>
        <Item>
          <ReactUI.Button size="large">Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button size="large" variant={{hover: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button size="large" variant={{focus: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button size="large" variant={{active: true}}>Button</ReactUI.Button>
        </Item>
        <Item>
          <ReactUI.Button size="large" disabled>Button</ReactUI.Button>
        </Item>

      </Block>

      <Block>
        <Item>
          <ReactUI.FlatButton size="small">Button</ReactUI.FlatButton>
        </Item>
        <Item>
          <ReactUI.FlatButton>Button</ReactUI.FlatButton>
        </Item>
        <Item>
          <ReactUI.FlatButton size="large">Button</ReactUI.FlatButton>
        </Item>
      </Block>
      <Block>
        <Item>
          <ReactUI.QuietButton size="small">Button</ReactUI.QuietButton>
        </Item>
        <Item>
          <ReactUI.QuietButton>Button</ReactUI.QuietButton>
        </Item>
        <Item>
          <ReactUI.QuietButton size="large">Button</ReactUI.QuietButton>
        </Item>
      </Block>
      <Block>
        <Item>
          <ReactUI.DangerButton size="small">Button</ReactUI.DangerButton>
        </Item>
        <Item>
          <ReactUI.DangerButton>Button</ReactUI.DangerButton>
        </Item>
        <Item>
          <ReactUI.DangerButton size="large">Button</ReactUI.DangerButton>
        </Item>
      </Block>
      <Block>
        <Item>
          <ReactUI.FlatDangerButton size="small">Button</ReactUI.FlatDangerButton>
        </Item>
        <Item>
          <ReactUI.FlatDangerButton>Button</ReactUI.FlatDangerButton>
        </Item>
        <Item>
          <ReactUI.FlatDangerButton size="large">Button</ReactUI.FlatDangerButton>
        </Item>
      </Block>
      <Block>
        <Item>
          <ReactUI.SuccessButton size="small">Button</ReactUI.SuccessButton>
        </Item>
        <Item>
          <ReactUI.SuccessButton>Button</ReactUI.SuccessButton>
        </Item>
        <Item>
          <ReactUI.SuccessButton size="large">Button</ReactUI.SuccessButton>
        </Item>
      </Block>
    </div>
  );
}
