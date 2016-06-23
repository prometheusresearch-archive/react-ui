import './Site.css';

import React from 'react';
import AngleRightIcon from 'react-icons/lib/fa/angle-right';
import AngleLeftIcon from 'react-icons/lib/fa/angle-left';

import * as ReactUI from '../src/index';
import * as Nav from '../src/topNav';
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

function DemoButtonGroup({children, disabled = []}) {
  if (!Array.isArray(disabled)) {
    disabled = [disabled];
  }
  return (
    <Items>
      <Item>
        {React.cloneElement(children, {
          children: 'Left',
          disabled: disabled.indexOf('left') > -1,
          groupHorizontally: true})}
        {React.cloneElement(children, {
          children: 'Center',
          disabled: disabled.indexOf('center') > -1,
          groupHorizontally: true})}
        {React.cloneElement(children, {
          children: 'Right',
          disabled: disabled.indexOf('right') > -1,
          groupHorizontally: true})}
      </Item>
    </Items>
  );
}

export default function Site() {
  return (
    <Block>
      <Nav.Navigation
        title="React UI"
        menu={[
          <Nav.PrimaryButton key="home">Home</Nav.PrimaryButton>,
          <Nav.PrimaryButton key="layout">Layout</Nav.PrimaryButton>,
          <Nav.PrimaryMenu key="ui"
            items={[
              <Nav.PrimaryMenuItem>Button</Nav.PrimaryMenuItem>
            ]}
            >
            UI
          </Nav.PrimaryMenu>
        ]}
        />
      <Block padding="medium">
        <DemoSection title="Button">

          <DemoVariant title="Size">
            <DemoButtonSizes Button={ReactUI.Button} />
          </DemoVariant>

          <DemoVariant title="States">
            <DemoButtonVariants Button={ReactUI.Button} />
          </DemoVariant>

          <DemoVariant title="<FlatButton />">
            <DemoButtonSizes Button={ReactUI.FlatButton} />
            <DemoButtonVariants Button={ReactUI.FlatButton} />
          </DemoVariant>

          <DemoVariant title="<QuietButton />">
            <DemoButtonSizes Button={ReactUI.QuietButton} />
            <DemoButtonVariants Button={ReactUI.QuietButton} />
          </DemoVariant>

          <DemoVariant title="<SuccessButton />">
            <DemoButtonSizes Button={ReactUI.SuccessButton} />
            <DemoButtonVariants Button={ReactUI.SuccessButton} />
          </DemoVariant>

          <DemoVariant title="<DangerButton />">
            <DemoButtonSizes Button={ReactUI.DangerButton} />
            <DemoButtonVariants Button={ReactUI.DangerButton} />
          </DemoVariant>

          <DemoVariant title="<FlatSuccessButton />">
            <DemoButtonSizes Button={ReactUI.FlatSuccessButton} />
            <DemoButtonVariants Button={ReactUI.FlatSuccessButton} />
          </DemoVariant>

          <DemoVariant title="<FlatDangerButton />">
            <DemoButtonSizes Button={ReactUI.FlatDangerButton} />
            <DemoButtonVariants Button={ReactUI.FlatDangerButton} />
          </DemoVariant>

          <DemoVariant title="Button as a link">
            <Items>
              <Item>
                <ReactUI.Button size="small" href="/">Go home</ReactUI.Button>
              </Item>
              <Item>
                <ReactUI.FlatButton size="small" href="/">Go home</ReactUI.FlatButton>
              </Item>
              <Item>
                <ReactUI.QuietButton size="small" href="/">Go home</ReactUI.QuietButton>
              </Item>
          </Items>
          </DemoVariant>

        </DemoSection>


        <DemoSection title="Button group">

          <DemoButtonGroup>
            <ReactUI.Button size="small" />
          </DemoButtonGroup>

          <DemoButtonGroup>
            <ReactUI.Button size="normal" />
          </DemoButtonGroup>

          <DemoVariant title="Disabled buttons">
            <DemoButtonGroup disabled="left">
              <ReactUI.Button size="normal" />
            </DemoButtonGroup>

            <DemoButtonGroup disabled="center">
              <ReactUI.Button size="normal" />
            </DemoButtonGroup>

            <DemoButtonGroup disabled="right">
              <ReactUI.Button size="normal" />
            </DemoButtonGroup>
          </DemoVariant>

          <DemoVariant title="With <FlatButton />">
            <DemoButtonGroup>
              <ReactUI.FlatButton size="small" />
            </DemoButtonGroup>

            <DemoButtonGroup>
              <ReactUI.FlatButton size="normal" />
            </DemoButtonGroup>
          </DemoVariant>

          <DemoVariant title="With <FlatButton /> with Disabled buttons">
            <DemoButtonGroup disabled="left">
              <ReactUI.FlatButton size="normal" />
            </DemoButtonGroup>

            <DemoButtonGroup disabled="center">
              <ReactUI.FlatButton size="normal" />
            </DemoButtonGroup>

            <DemoButtonGroup disabled="right">
              <ReactUI.FlatButton size="normal" />
            </DemoButtonGroup>
          </DemoVariant>

          <DemoButtonGroup>
            <ReactUI.QuietButton size="normal" />
          </DemoButtonGroup>

          <DemoButtonGroup>
            <ReactUI.SuccessButton size="normal" />
          </DemoButtonGroup>

          <DemoButtonGroup>
            <ReactUI.DangerButton size="normal" />
          </DemoButtonGroup>

          <Items>
            <Item>
              <ReactUI.Button groupHorizontally icon={<AngleLeftIcon />}>
                Left
              </ReactUI.Button>
              <ReactUI.Button groupHorizontally>
                Center
              </ReactUI.Button>
              <ReactUI.Button groupHorizontally icon={<AngleRightIcon />}>
                Right
              </ReactUI.Button>
            </Item>
          </Items>

          <Items>
            <Item>
              <ReactUI.Button size="small" groupHorizontally icon={<AngleLeftIcon />}>
                Left
              </ReactUI.Button>
              <ReactUI.Button size="small" groupHorizontally>
                Center
              </ReactUI.Button>
              <ReactUI.Button size="small" groupHorizontally icon={<AngleRightIcon />}>
                Right
              </ReactUI.Button>
            </Item>
          </Items>

          <Items>
            <Item>
              <ReactUI.FlatButton groupHorizontally icon={<AngleLeftIcon />}>
                Left
              </ReactUI.FlatButton>
              <ReactUI.FlatButton groupHorizontally>
                Center
              </ReactUI.FlatButton>
              <ReactUI.FlatButton groupHorizontally icon={<AngleRightIcon />}>
                Right
              </ReactUI.FlatButton>
            </Item>
          </Items>

          <Items>
            <Item>
              <ReactUI.FlatButton size="small" groupHorizontally icon={<AngleLeftIcon />}>
                Left
              </ReactUI.FlatButton>
              <ReactUI.FlatButton size="small" groupHorizontally>
                Center
              </ReactUI.FlatButton>
              <ReactUI.FlatButton size="small" groupHorizontally icon={<AngleRightIcon />}>
                Right
              </ReactUI.FlatButton>
            </Item>
          </Items>

        </DemoSection>

        <DemoSection title="Button with icons">
          <Items>
            <ReactUI.Button groupHorizontally icon={<AngleLeftIcon />}>
              Prev
            </ReactUI.Button>
            <ReactUI.Button groupHorizontally iconRight={<AngleRightIcon />}>
              Next
            </ReactUI.Button>
          </Items>
          <Items>
            <ReactUI.Button size="small" groupHorizontally icon={<AngleLeftIcon />}>
              Prev
            </ReactUI.Button>
            <ReactUI.Button size="small" groupHorizontally iconRight={<AngleRightIcon />}>
              Next
            </ReactUI.Button>
          </Items>
          <Items>
            <ReactUI.Button groupHorizontally icon={<AngleLeftIcon />} />
            <ReactUI.Button groupHorizontally icon={<AngleRightIcon />} />
          </Items>
        </DemoSection>

        <DemoSection title="Checkbox">
          <Items>
            <Item>
              <ReactUI.Checkbox label="Not checked" value={false} />
            </Item>
            <Item>
              <ReactUI.Checkbox label="Checked" value={true} />
            </Item>
            <Item>
              <ReactUI.Checkbox label="Checked" value={true} disabled />
            </Item>
            <Item>
              <ReactUI.Checkbox label="Checked" value={false} disabled />
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

          <DemoVariant title="Disabled">
            <ReactUI.CheckboxGroup
              disabled
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

          <DemoVariant title="Disabled state">
            <ReactUI.RadioGroup
              layout="horizontal"
              disabled
              options={[
                {label: 'Dog', value: 'dog'},
                {label: 'Cat', value: 'cat'}]}
              value="cat"
              />
          </DemoVariant>
        </DemoSection>

        <DemoSection title="Input">
          <Items>
            <ReactUI.Input />
          </Items>
          <Items>
            <ReactUI.Input variant={{focus: true}} />
          </Items>
          <Items>
            <ReactUI.Input variant={{error: true}} />
          </Items>
          <Items>
            <ReactUI.Input variant={{error: true, focus: true}} />
          </Items>
          <Items>
            <ReactUI.Input disabled />
          </Items>
        </DemoSection>

        <DemoSection title="Textarea">
          <Items>
            <ReactUI.Textarea />
          </Items>
          <Items>
            <ReactUI.Textarea variant={{error: true}} />
          </Items>
          <Items>
            <ReactUI.Textarea disabled />
          </Items>
        </DemoSection>

        <DemoSection title="Card">

          <DemoVariant title="<Card />">
            <ReactUI.Card padding="x-small">
              Children
            </ReactUI.Card>
          </DemoVariant>

          <DemoVariant title="<Card header={...} />">
            <ReactUI.Card header="Title" padding="x-small">
              Children
            </ReactUI.Card>
          </DemoVariant>

          <DemoVariant title="<Card header={...} footer={...} />">
            <ReactUI.Card
              header="Title"
              footer={<ReactUI.FlatButton size="small">Submit</ReactUI.FlatButton>}
              padding="x-small">
              Children
            </ReactUI.Card>
          </DemoVariant>

          <DemoVariant title="<Card variant={{success: true}} />">
            <ReactUI.Card padding="x-small" variant={{success: true}}>
              Children
            </ReactUI.Card>
          </DemoVariant>

          <DemoVariant title="<Card variant={{success: true}} header={...} />">
            <ReactUI.Card variant={{success: true}} header="Title" padding="x-small">
              Children
            </ReactUI.Card>
          </DemoVariant>

        </DemoSection>

        <DemoSection title="<Menu />">
          <ReactUI.Card width={300}>
            <ReactUI.Block paddingH="small" marginTop="small">
              <ReactUI.LabelText>Menu</ReactUI.LabelText>
            </ReactUI.Block>
            <ReactUI.Block marginV="x-small">
              <ReactUI.QuietButton
                attach={{left: true, right: true}}
                width="100%"
                textAlign="left">
                First item
              </ReactUI.QuietButton>
              <ReactUI.QuietButton
                attach={{left: true, right: true}}
                width="100%"
                textAlign="left">
                Second item
              </ReactUI.QuietButton>
              <ReactUI.QuietButton
                attach={{left: true, right: true}}
                width="100%"
                textAlign="left">
                Third item
              </ReactUI.QuietButton>
            </ReactUI.Block>
          </ReactUI.Card>
        </DemoSection>

        <DemoSection title="<ProgressBar />">
          <ReactUI.Block maxWidth={300}>
            <Items>
              <ReactUI.ProgressBar progress={0} />
            </Items>
            <Items>
              <ReactUI.ProgressBar progress={0.23} />
            </Items>
            <Items>
              <ReactUI.ProgressBar progress={0.49} />
            </Items>
            <Items>
              <ReactUI.ProgressBar progress={0.76} />
            </Items>
            <Items>
              <ReactUI.ProgressBar progress={1} />
            </Items>
          </ReactUI.Block>
        </DemoSection>

      </Block>
    </Block>
  );
}
