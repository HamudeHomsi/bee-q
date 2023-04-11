import { html } from 'lit-html';
import mdx from './bq-dropdown-item.mdx';

export default {
  title: 'Components/Dropdown item',
  component: 'bq-dropdown-item',
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
  return html`<bq-dropdown-item>${args.text}</bq-dropdown-item>`;
};

export const Default = (args) => Template(args);
