import type { Meta } from '@storybook/react';
import { FacebookIcon } from './FacebookIcon'
import { InstagramIcon } from './InstagramIcon'
import { TiktokIcon } from './TiktokIcon'
import { YoutubeIcon } from './YoutubeIcon'

const meta: Meta<typeof InstagramIcon> = {
  title: 'Icons',
};

export default meta;

export const Instagram = () => <InstagramIcon />;

export const Facebook = () => <FacebookIcon />;

export const Tiktok = () => <TiktokIcon />;

export const Youtube = () => <YoutubeIcon />;
