import 'normalize.css/normalize.css';
import React from 'react';
import * as ReactUI from '../src/index';
import {Block} from '../src/index';

function Item({children}) {
  return (
    <Block inline marginRight="x-small">
      {children}
    </Block>
  );
}

function Items({children}) {
  return <Block marginBottom="small">{children}</Block>;
}

function DemoSection({title, children}) {
  return (
    <Block marginBottom="large">
      <h2>{title}</h2>
      <Block>{children}</Block>
    </Block>
  );
}

function DemoVariant({title, children}) {
  return (
    <Block marginBottom="medium">
      <h3 style={{color: '#777'}}>{title}</h3>
      <Block>{children}</Block>
    </Block>
  );
}

function DemoButtonVariants({Button}) {
  return (
    <Items>
      <Item>
        <Button size="small">Button</Button>
      </Item>
      <Item>
        <Button size="small" variant={{hover: true}}>
          Button
        </Button>
      </Item>
      <Item>
        <Button size="small" variant={{focus: true}}>
          Button
        </Button>
      </Item>
      <Item>
        <Button size="small" variant={{active: true}}>
          Button
        </Button>
      </Item>
      <Item>
        <Button size="small" disabled>
          Button
        </Button>
      </Item>

    </Items>
  );
}

function DemoButtonSizes({Button}) {
  return (
    <Items>
      <Item>
        <Button size="small">Button</Button>
      </Item>
      <Item>
        <Button size="normal">Button</Button>
      </Item>
      <Item>
        <Button size="large">Button</Button>
      </Item>
    </Items>
  );
}

function DemoButtonGroup({children}) {
  return (
    <Items>
      <Item>
        {React.cloneElement(children, {children: 'Left', groupHorizontally: true})}
        {React.cloneElement(children, {children: 'Center', groupHorizontally: true})}
        {React.cloneElement(children, {children: 'Right', groupHorizontally: true})}
      </Item>
    </Items>
  );
}

export default function Site() {
  return (
    <Block padding="small">
      <DemoSection title="Button">

        <DemoVariant title="Size">
          <DemoButtonSizes Button={ReactUI.Button} />
        </DemoVariant>

        <DemoVariant title="States">
          <DemoButtonVariants Button={ReactUI.Button} />
        </DemoVariant>

        <DemoVariant title="Flat">
          <DemoButtonSizes Button={ReactUI.FlatButton} />
          <DemoButtonVariants Button={ReactUI.FlatButton} />
        </DemoVariant>

        <DemoVariant title="Quiet">
          <DemoButtonSizes Button={ReactUI.QuietButton} />
          <DemoButtonVariants Button={ReactUI.QuietButton} />
        </DemoVariant>

        <DemoVariant title="Success">
          <DemoButtonSizes Button={ReactUI.SuccessButton} />
          <DemoButtonVariants Button={ReactUI.SuccessButton} />
        </DemoVariant>

        <DemoVariant title="Danger">
          <DemoButtonSizes Button={ReactUI.DangerButton} />
          <DemoButtonVariants Button={ReactUI.DangerButton} />
        </DemoVariant>

        <DemoVariant title="Flat Danger">
          <DemoButtonSizes Button={ReactUI.FlatDangerButton} />
          <DemoButtonVariants Button={ReactUI.FlatDangerButton} />
        </DemoVariant>
      </DemoSection>

      <DemoSection title="Button group">

        <DemoButtonGroup>
          <ReactUI.Button size="small" />
        </DemoButtonGroup>

        <DemoButtonGroup>
          <ReactUI.Button size="normal" />
        </DemoButtonGroup>

        <DemoButtonGroup>
          <ReactUI.FlatButton size="normal" />
        </DemoButtonGroup>

        <DemoButtonGroup>
          <ReactUI.QuietButton size="normal" />
        </DemoButtonGroup>

        <DemoButtonGroup>
          <ReactUI.SuccessButton size="normal" />
        </DemoButtonGroup>

        <DemoButtonGroup>
          <ReactUI.DangerButton size="normal" />
        </DemoButtonGroup>

      </DemoSection>

      <DemoSection title="Checkbox">
        <Items>
          <Item>
            <ReactUI.Checkbox label="Not checked" value={false} />
          </Item>
          <Item>
            <ReactUI.Checkbox label="Checked" value={true} />
          </Item>
        </Items>
      </DemoSection>

      <DemoSection title="Checkbox group">
        <DemoVariant title="Vertical layout">
          <ReactUI.CheckboxGroup
            options={[
              {label: 'Dog', value: 'dog'},
              {label: 'Cat', value: 'cat'}]}
            value={['cat']}
            />
        </DemoVariant>
        <DemoVariant title="Horizontal layout">
          <ReactUI.CheckboxGroup
            layout="horizontal"
            options={[
              {label: 'Dog', value: 'dog'},
              {label: 'Cat', value: 'cat'}]}
            value={['cat']}
            />
        </DemoVariant>
      </DemoSection>

      <DemoSection title="Radiogroup">
        <DemoVariant title="Vertical layout">
          <ReactUI.RadioGroup
            options={[
              {label: 'Dog', value: 'dog'},
              {label: 'Cat', value: 'cat'}]}
            value="cat"
            />
        </DemoVariant>
        <DemoVariant title="Horizontal layout">
          <ReactUI.RadioGroup
            layout="horizontal"
            options={[
              {label: 'Dog', value: 'dog'},
              {label: 'Cat', value: 'cat'}]}
            value="cat"
            />
        </DemoVariant>
      </DemoSection>

      <DemoSection title="Input">
        <ReactUI.Input />
      </DemoSection>

      <DemoSection title="Textarea">
        <ReactUI.Textarea />
      </DemoSection>

    </Block>
  );
}
