import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import mdx from './bq-tab-group.mdx';
import { TAB_SIZE } from '../../tab/bq-tab.types';

const meta: Meta = {
  title: 'Components/Tabs',
  component: 'bq-tab-group',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    size: { control: 'select', options: [...TAB_SIZE] },
    // Event handlers
    bqChange: { action: 'bqChange' },
    bqFocus: { action: 'bqFocus', table: { disable: true } },
    bqBlur: { action: 'bqBlur', table: { disable: true } },
  },
  args: {
    size: 'small',
  },
};
export default meta;

type Story = StoryObj;

const Template = (args: Args) => {
  return html`
    <bq-tab-group
      value="5"
      .size=${args.size}
      @bqChange=${args.bqChange}
      @bqFocus=${args.bqFocus}
      @bqBlur=${args.bqBlur}
    >
      <bq-tab tab-id="1">Tab</bq-tab>
      <bq-tab tab-id="2">Tab</bq-tab>
      <bq-tab tab-id="3">Long Tab name</bq-tab>
      <bq-tab tab-id="4" disabled>Tab</bq-tab>
      <bq-tab tab-id="5" active>Tab</bq-tab>
      <bq-tab tab-id="6">Tab</bq-tab>
      <bq-tab tab-id="7">Tab</bq-tab>
      <bq-tab tab-id="8">Tab</bq-tab>
    </bq-tab-group>
  `;
};

export const Default: Story = {
  render: Template,
};

const IconTemplate = (args: Args) => {
  return html`
    <bq-tab-group
      value="5"
      .size=${args.size}
      @bqChange=${args.bqChange}
      @bqFocus=${args.bqFocus}
      @bqBlur=${args.bqBlur}
    >
      <bq-tab tab-id="1"><bq-icon name="pulse" slot="icon"></bq-icon>Tab</bq-tab>
      <bq-tab tab-id="2"><bq-icon name="bell" slot="icon"></bq-icon>Tab</bq-tab>
      <bq-tab tab-id="3"><bq-icon name="airplane-in-flight" slot="icon"></bq-icon>Long Tab name</bq-tab>
      <bq-tab tab-id="4" disabled><bq-icon name="airplane-tilt" slot="icon"></bq-icon>Tab</bq-tab>
      <bq-tab tab-id="5" active><bq-icon name="align-right-simple" slot="icon"></bq-icon>Tab</bq-tab>
      <bq-tab tab-id="6"><bq-icon name="anchor" slot="icon"></bq-icon>Tab</bq-tab>
      <bq-tab tab-id="7"><bq-icon name="anchor-simple" slot="icon"></bq-icon>Tab</bq-tab>
      <bq-tab tab-id="8"><bq-icon name="android-logo" slot="icon"></bq-icon>Tab</bq-tab>
    </bq-tab-group>
  `;
};

export const Icon: Story = {
  render: IconTemplate,
};
