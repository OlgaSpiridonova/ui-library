import { type ReactNode } from 'react'
import { Field, Label, type InputProps, type TextareaProps } from '@headlessui/react';
import styles from './FormField.module.css';
import { Input } from '../Input'
import { Textarea } from '../Textarea'

type FieldProps = { label: string, multiline?: boolean } & InputProps;
type MultilineFieldProps = { label: string, multiline?: boolean } & TextareaProps;

export function FormField (props: FieldProps): ReactNode;
export function FormField (props: MultilineFieldProps): ReactNode;
export function FormField ({ label, multiline = false, ...props }: FieldProps | MultilineFieldProps) {
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
