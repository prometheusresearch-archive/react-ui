import './index.css';

import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Input from '../src/Input';
import Textarea from '../src/Textarea';
import ButtonBase from '../src/ButtonBase';
import Button from '../src/Button';
import FlatButton from '../src/FlatButton';
import QuietButton from '../src/QuietButton';
import DangerButton from '../src/DangerButton';
import FlatDangerButton from '../src/FlatDangerButton';
import SuccessButton from '../src/SuccessButton';
import FlatSuccessButton from '../src/FlatSuccessButton';
import OptionButton from '../src/OptionButton';
import CheckboxBase from '../src/CheckboxBase';
import Checkbox from '../src/Checkbox';
import CheckboxGroupBase from '../src/CheckboxGroupBase';
import CheckboxGroup from '../src/CheckboxGroup';
import I18N from '../src/I18N';

storiesOf('<Input />', module)
  .add('Default state', () => (
    <Input />
  ))
  .add('Error state', () => (
    <Input error />
  ))
  .add('Disabled state', () => (
    <Input disabled />
  ))
  .add('No border variant', () => (
    <Input noBorder />
  ));

storiesOf('<Textarea />', module)
  .add('Default state', () => (
    <Textarea />
  ))
  .add('Error state', () => (
    <Textarea error />
  ))
  .add('Disabled state', () => (
    <Textarea disabled />
  ))
  .add('No border variant', () => (
    <Textarea noBorder />
  ));

storiesOf('<ButtonBase />', module)
  .add('Default state', () => (
    <ButtonBase>Click me</ButtonBase>
  ));

function createButtonStories(Button) {
  storiesOf(`<${Button.displayName || Button.name} />`, module)
    .add('Default state', () =>
      <Button>Click me</Button>
    )
    .add('Size: x-small', () =>
      <Button size="x-small">Click me</Button>
    )
    .add('Size: small', () =>
      <Button size="small">Click me</Button>
    )
    .add('Size: normal', () =>
      <Button size="normal">Click me</Button>
    )
    .add('Size: large', () =>
      <Button size="large">Click me</Button>
    )
    .add('With icon', () =>
      <Button icon="+">Add</Button>
    )
    .add('With icon (alternative)', () =>
      <Button iconAlt="+">Add</Button>
    )
    .add('Grouped horizontally', () =>
      <div>
        <Button groupHorizontally>Add</Button>
        <Button groupHorizontally>Remove</Button>
      </div>
    )
    .add('Grouped horizontally (rtl)', () =>
      <I18N dir="rtl">
        <div>
          <Button groupHorizontally>Add</Button>
          <Button groupHorizontally>Remove</Button>
        </div>
      </I18N>
    )
    .add('Grouped vertically', () =>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Button groupVertically>Add</Button>
        <Button groupVertically>Remove</Button>
      </div>
    );
}

storiesOf('<CheckboxBase />', module)
  .add('Off state', () => (
    <CheckboxBase value={false} />
  ))
  .add('On state', () => (
    <CheckboxBase value={true} />
  ));

storiesOf('<Checkbox/>', module)
  .add('Off state', () => (
    <Checkbox
      value={false}
      />
  ))
  .add('On state', () => (
    <Checkbox
      value={true}
      />
  ))
  .add('With label', () => (
    <Checkbox
      value={true}
      label="Lights on"
      />
  ))
  .add('With label & hint', () => (
    <Checkbox
      value={true}
      label="Lights on"
      hint="You can control the lights"
      />
  ))
  .add('With label & hint (rtl)', () => (
    <I18N dir="rtl">
      <Checkbox
        value={true}
        label="Lights on"
        hint="You can control the lights"
        />
    </I18N>
  ))
  .add('Disabled state', () => (
    <Checkbox
      disabled
      value={true}
      label="Lights on"
      hint="You can control the lights"
      />
  ));

storiesOf('<CheckboxGroupBase />', module)
  .add('Example', () => (
    <CheckboxGroupBase
      options={[
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
      ]}
      />
  ));

storiesOf('<CheckboxGroup />', module)
  .add('Vertical layout', () => (
    <CheckboxGroup
      options={[
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
      ]}
      />
  ))
  .add('Horizontal layout', () => (
    <CheckboxGroup
      layout="horizontal"
      options={[
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
      ]}
      />
  ))
  .add('Horizontal layout (rtl)', () => (
    <I18N dir="rtl">
      <CheckboxGroup
        layout="horizontal"
        options={[
          {label: 'A', value: 'a'},
          {label: 'B', value: 'b'},
        ]}
        />
    </I18N>
  ));

createButtonStories(Button);
createButtonStories(FlatButton);
createButtonStories(QuietButton);

createButtonStories(SuccessButton);
createButtonStories(FlatSuccessButton);

createButtonStories(DangerButton);
createButtonStories(FlatDangerButton);

createButtonStories(OptionButton);