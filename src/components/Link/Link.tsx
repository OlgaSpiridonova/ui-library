import { type AnchorHTMLAttributes } from 'react';
import styles from './Link.module.css';
import clsx from 'clsx';

export const Link = ({ iconLink = false, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & {iconLink?: boolean}) => {
    return (
        <div className={clsx({[styles.iconLink]: iconLink})}>
            <a {...props} />
        </div>
    )
};
