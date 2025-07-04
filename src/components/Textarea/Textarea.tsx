import { Textarea as HeadlessTextarea, type TextareaProps } from '@headlessui/react';
import styles from './Textarea.module.css';

export const Textarea = (props: TextareaProps) => {
    return (
        <HeadlessTextarea className={styles.textarea} {...props} />
    )
};
