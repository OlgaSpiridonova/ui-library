import type { Meta } from '@storybook/react';
import { FacebookIcon } from './FacebookIcon'
import { InstagramIcon } from './InstagramIcon'
import { TiktokIcon } from '../icons/TiktokIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'

const meta: Meta<typeof InstagramIcon> = {
  title: 'Icons',
};

export default meta;

export const Instagram = () => <InstagramIcon />;

export const Facebook = () => <FacebookIcon />;

export const Tiktok = () => <TiktokIcon />;

export const Youtube = () => <YoutubeIcon />;
