import type { Meta, StoryObj } from '@storybook/react';
// import { FacebookIcon } from './FacebookIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
// import { TiktokIcon } from '../icons/TiktokIcon'
// import { YoutubeIcon } from '../icons/YoutubeIcon'

const meta: Meta<typeof InstagramIcon> = {
  title: 'Icons',
  component: InstagramIcon,
};

export default meta;
type Story = StoryObj<typeof InstagramIcon>;

export const Instagram: Story = {
  args: {
    // iconLink: true,
    // children: FacebookIcon(),
  },
};

// export const TextLink: Story = {
//   args: {
//     children: 'Text Link',
//   },
// };
