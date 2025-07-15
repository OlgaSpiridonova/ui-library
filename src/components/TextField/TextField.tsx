import { type ReactNode } from 'react'
import { Field, Label, type InputProps, type TextareaProps } from '@headlessui/react';
import styles from './TextField.module.css';
import { Input } from '../Input'
import { Textarea } from '../Textarea'

type FieldProps = { label: string, multiline?: boolean } & InputProps;
type MultilineFieldProps = { label: string, multiline?: boolean } & TextareaProps;

export function TextField (props: FieldProps): ReactNode;
export function TextField (props: MultilineFieldProps): ReactNode;
export function TextField ({ label, multiline = false, ...props }: FieldProps | MultilineFieldProps) {
    const isTextarea = (props: InputProps | TextareaProps): props is TextareaProps => {
        return multiline && 'cols' in props;
    }
    return (
        <Field className={styles.field}>
            <Label className={styles.label}>{label}</Label>
            {isTextarea(props) ? <Textarea {...props} /> : <Input {...props} />}
        </Field>
    )
};
