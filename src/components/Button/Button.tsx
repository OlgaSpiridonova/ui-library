import { Button as HeadlessButton, type ButtonProps } from '@headlessui/react';
import styles from './Button.module.css';
import clsx from 'clsx';

export const Button = ({ variant = "contained", ...props}: ButtonProps & { variant?: "contained" | "outlined" | "light"}) => {
    return (
        <HeadlessButton className={clsx(styles.button, {
            [styles.contained]: variant === 'contained',
            [styles.outlined]: variant === 'outlined',
            [styles.light]: variant === 'light',
        })} {...props} />
    )
};
