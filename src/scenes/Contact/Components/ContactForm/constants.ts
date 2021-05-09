import { TextFieldProps } from "react-md/lib/TextFields/TextField";

export interface FieldConfig extends TextFieldProps {
  id: 'firstName' | 'lastName' | 'email' | 'subject'
  errorMessage: string
  alternativeErrorMessage?: string
  touched?: boolean
  fieldType?: 'text' | 'area'
}

export const fieldsConfig: FieldConfig[] = [
  {
    id: 'firstName',
    label: 'First name',
    placeholder: 'Enter your first name...',
    required: true,
    errorMessage: 'Please write down your first name',
    maxLength: 255
  },
  {
    id: 'lastName',
    label: 'Last name',
    placeholder: 'Enter your last name...',
    required: true,
    errorMessage: 'Please write down your last name',
    maxLength: 255
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Enter your email...',
    required: true,
    errorMessage: 'Don\'t forget to tell us your email',
    alternativeErrorMessage: 'Please, write a valid email',
    maxLength: 255
  },
  {
    id: 'subject',
    label: 'Subject',
    placeholder: 'Let us know your concerns',
    required: true,
    errorMessage: 'Don\'t forget to write something to use!',
    maxLength: 500,
    fieldType: 'area'
  }
]

export const validEmailRegExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
