import { Input as HeadlessInput, type InputProps } from '@headlessui/react';
import styles from './Input.module.css';
import clsx from 'clsx';

export const Input = ({ variant = "outline", ...props }: InputProps & { variant?: "outline" | "underline" }) => {
    return (
        <HeadlessInput className={clsx(styles.input, {
            [styles.outline]: variant === 'outline',
            [styles.underline]: variant === 'underline',
        })} {...props} />
    )
};
