import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const InputTextField: Story = {
  args: {
    label: 'Name',
    placeholder: 'Name',
    multiline: false,
  },
};

export const TextareaTextField: Story = {
  args: {
    label: 'Name',
    placeholder: 'Name',
    multiline: true,
    rows: 3,
    cols: 40,
  },
};
