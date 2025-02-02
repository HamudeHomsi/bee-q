import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import mdx from './bq-switch.mdx';
import { SWITCH_INNER_LABEL, SWITCH_JUSTIFY_CONTENT } from '../bq-swithc.types';

const meta: Meta = {
  title: 'Components/Switch',
  component: 'bq-switch',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    'background-on-hover': { control: 'boolean' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    'full-width': { control: 'boolean' },
    'inner-label': { control: 'inline-radio', options: [...SWITCH_INNER_LABEL] },
    'justify-content': { control: 'select', options: [...SWITCH_JUSTIFY_CONTENT] },
    name: { control: 'text' },
    required: { control: 'boolean' },
    'reverse-order': { control: 'boolean' },
    value: { control: 'text' },
    // Event handlers
    bqBlur: { action: 'bqBlur' },
    bqFocus: { action: 'bqFocus' },
    bqChange: { action: 'bqChange' },
    // Not part of the component
    text: { control: 'text', table: { disable: true } },
  },
  args: {
    'background-on-hover': false,
    checked: false,
    disabled: false,
    'full-width': false,
    'inner-label': 'default',
    'justify-content': 'start',
    name: 'bq-switch',
    required: false,
    'reverse-order': false,
    value: 'Switch value',
    // Not part of the component
    text: 'Toggle me!',
  },
};
export default meta;

type Story = StoryObj;

const Template = (args: Args) => html`
  <bq-switch
    background-on-hover=${args['background-on-hover']}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    ?full-width=${args['full-width']}
    inner-label=${args['inner-label']}
    justify-content=${args['justify-content']}
    name=${args.name}
    ?required=${args.required}
    ?reverse-order=${args['reverse-order']}
    value=${args.value}
    @bqFocus=${args.bqFocus}
    @bqBlur=${args.bqBlur}
    @bqChange=${args.bqChange}
  >
    ${args.text}
  </bq-switch>
`;

export const Default: Story = {
  render: Template,
};

export const Checked: Story = {
  render: Template,
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithInnerLabel: Story = {
  render: Template,
  args: {
    'inner-label': 'icon',
  },
};

export const ReverseOrder: Story = {
  render: Template,
  args: {
    'reverse-order': true,
  },
};

export const FullWidth: Story = {
  render: (args) => html`
    <div class="m-auto max-w-md">
      <div class="mb-4 text-m font-regular">
        Use a combination of <code class="bg-ui-secondary-disabled text-text-primary">full-width</code>,
        <code class="bg-ui-secondary-disabled text-text-primary">justify-content</code> and
        <code class="bg-ui-secondary-disabled text-text-primary">reverse-order</code>
      </div>
      ${Template({ ...args, text: 'Show app list in menu', value: 'show-app-list' })}
      ${Template({ ...args, text: 'Show recently added apps', value: 'show-recently-apps', checked: true })}
      ${Template({ ...args, text: 'Show most used apps', value: 'show-used-apps', disabled: true })}
      ${Template({ ...args, text: 'Show app notifications', value: 'show-app-notifications', checked: true })}
    </div>
  `,
  args: {
    'background-on-hover': true,
    'full-width': true,
    'justify-content': 'space-between',
    'reverse-order': true,
  },
};
