import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Outline: Story = {
  args: {
    name: 'Name',
    placeholder: 'Name',
  },
};

export const Underline: Story = {
  args: {
    name: 'Name',
    placeholder: 'Name',
    variant: 'underline'
  },
};
