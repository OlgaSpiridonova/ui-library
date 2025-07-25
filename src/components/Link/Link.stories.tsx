import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { FacebookIcon } from '../../icons/FacebookIcon'
import { InstagramIcon } from '../../icons/InstagramIcon'
import { TiktokIcon } from '../../icons/TiktokIcon'
import { YoutubeIcon } from '../../icons/YoutubeIcon'

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const IconLinks = () => (
  <>
    <div style={{display: 'flex', gap: 8}}>
      <Link iconLink><FacebookIcon /></Link>
      <Link iconLink><InstagramIcon /></Link>
      <Link iconLink><TiktokIcon /></Link>
      <Link iconLink><YoutubeIcon /></Link>
    </div>
  </>
);

export const TextLink: Story = {
  args: {
    children: 'Text Link',
  },
};
