import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { FacebookIcon } from '../../icons/FacebookIcon'

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const IconLink: Story = {
  args: {
    iconLink: true,
    children: FacebookIcon(),
  },
};

export const TextLink: Story = {
  args: {
    children: 'Text Link',
  },
};
