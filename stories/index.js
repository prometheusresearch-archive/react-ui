/**
 * @flow
 */

import './index.css';

import React from 'react';
import {storiesOf} from '@kadira/storybook';

import Input from '../src/Input';
import IntegerInput from '../src/IntegerInput';
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

import RadioBase from '../src/RadioBase';
import Radio from '../src/Radio';

import CheckboxGroupBase from '../src/CheckboxGroupBase';
import CheckboxGroup from '../src/CheckboxGroup';

import RadioGroupBase from '../src/RadioGroupBase';
import RadioGroup from '../src/RadioGroup';

import {Card, CardItem} from '../src/Card';

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

storiesOf('<IntegerInput />', module)
  .add('Basic', () => (
    <IntegerInput />
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

storiesOf('<Card />', module)
  .add('Basic', () => (
    <Card>
      Card content
    </Card>
  ))
  .add('Basic with padding', () => (
    <Card padding={10}>
      Card content
    </Card>
  ))
  .add('With header', () => (
    <Card padding={10} header="Header">
      Card content
    </Card>
  ))
  .add('With footer', () => (
    <Card padding={10} footer="Footer">
      Card content
    </Card>
  ))
  .add('With header & footer', () => (
    <Card padding={10} header="Header" footer="Footer">
      Card content
    </Card>
  ))
  .add('Success variant', () => (
    <Card padding={10} variant={{success: true}} header="Header" footer="Footer">
      Card content
    </Card>
  ))
  .add('With card item', () => (
    <Card>
      <CardItem padding={10}>
        Item 1
      </CardItem>
      <CardItem padding={10}>
        Item 2
      </CardItem>
    </Card>
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

storiesOf('<RadioBase />', module)
  .add('Off state', () => (
    <RadioBase value={false} />
  ))
  .add('On state', () => (
    <RadioBase value={true} />
  ));

storiesOf('<Radio/>', module)
  .add('Off state', () => (
    <Radio
      value={false}
      />
  ))
  .add('On state', () => (
    <Radio
      value={true}
      />
  ))
  .add('With label', () => (
    <Radio
      value={true}
      label="Lights on"
      />
  ))
  .add('With label & hint', () => (
    <Radio
      value={true}
      label="Lights on"
      hint="You can control the lights"
      />
  ))
  .add('With label & hint (rtl)', () => (
    <I18N dir="rtl">
      <Radio
        value={true}
        label="Lights on"
        hint="You can control the lights"
        />
    </I18N>
  ))
  .add('Disabled state', () => (
    <Radio
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

storiesOf('<RadioGroupBase />', module)
  .add('Example', () => (
    <RadioGroupBase
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

storiesOf('<RadioGroup />', module)
  .add('Vertical layout', () => (
    <RadioGroup
      options={[
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
      ]}
      />
  ))
  .add('Horizontal layout', () => (
    <RadioGroup
      layout="horizontal"
      options={[
        {label: 'A', value: 'a'},
        {label: 'B', value: 'b'},
      ]}
      />
  ))
  .add('Horizontal layout (rtl)', () => (
    <I18N dir="rtl">
      <RadioGroup
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
