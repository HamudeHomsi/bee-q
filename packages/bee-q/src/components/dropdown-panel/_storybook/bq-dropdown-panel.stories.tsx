import { html } from 'lit-html';
import mdx from './bq-dropdown-panel.mdx';

export default {
  title: 'Components/Dropdown panel',
  component: 'bq-dropdown-panel',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    text: { control: 'text', table: { disable: true } },
  },
  args: {
    text: 'text',
  },
};

const Template = (args) => {
  return html`<bq-dropdown-panel>${args.text}</bq-dropdown-panel>`;
};

export const Default = (args) => Template(args);
