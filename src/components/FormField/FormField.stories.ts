import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'FormField',
  component: FormField,
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const InputFormField: Story = {
  args: {
    label: 'Name',
    placeholder: 'Name',
    multiline: false,
  },
};

export const TextareaFormField: Story = {
  args: {
    label: 'Name',
    placeholder: 'Name',
    multiline: true,
    rows: 3,
    cols: 40,
  },
};
