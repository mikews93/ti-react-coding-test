// @vendor
import React, { FunctionComponent, useContext, useEffect, useState } from 'react'
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import TextField from 'react-md/lib/TextFields/TextField';
import Button from 'react-md/lib/Buttons/Button';
import classnames from 'classnames';
import omit from 'lodash/omit'

import { fieldsConfig , FieldConfig, validEmailRegExp} from './constants'
import { deleteLocalStorageKey, getLocalStorage, isFetching, setLocalStorage, transformArrayToDictionary } from '../../../../utils';
import { GlobalContext, contactActions } from '../../../../store';

import styles from './ContactForm.module.scss';
import { REQUEST_STATUSES } from '../../../../constants';

const LocalStorageKey = 'contactForm';
export const ContactForm: FunctionComponent = () => {
  /**
   * context
   */
  const [{contact: contactState}, dispatch] = useContext(GlobalContext);

  /**
   * state
   */
  const [textFieldsConfig, setTextFieldsConfig] = useState<FieldConfig[]>(
    getLocalStorage(LocalStorageKey) || fieldsConfig
  )
  const [shouldDisableSubmit, setShouldDisableSubmit] = useState(false)
  const [isLoading, setIsLoading] = useState(isFetching(contactState?.requestStatus))

  useEffect(() => {
    setIsLoading(isFetching(contactState?.requestStatus))
    if (contactState?.requestStatus === REQUEST_STATUSES.SUCCESSFUL) {
      deleteLocalStorageKey(LocalStorageKey);
    }
  }, [contactState?.requestStatus])

  useEffect(() => {
    setShouldDisableSubmit(!textFieldsConfig.every(({ required, value, maxLength }: FieldConfig) =>
      required && value && (maxLength && value.toString().length <= maxLength)))
  }, [textFieldsConfig])

  const validateField = (field: FieldConfig, value: React.ReactText): string | undefined => {
    switch (field.id) {
      case 'email':
        if (value && !validEmailRegExp.test(value.toString())) {
          return field.alternativeErrorMessage
        }

        return (field.required && field.touched && !value) ? field.errorMessage: undefined
      default:
        return (field.required && field.touched && !value) ? field.errorMessage: undefined
    }
  }

  const handleFieldChange = (id: string, value: React.ReactText) => {
    const configDictionary = transformArrayToDictionary(textFieldsConfig, 'id');
    const currentField = configDictionary[id];
    const validateResult = validateField(currentField, value)
    configDictionary[id] = {
      ...currentField,
      touched: true,
      value: value.toString(),
      error: !!validateResult,
      errorText: validateResult
    }
    const updatedValues = Object.values(configDictionary);
    setTextFieldsConfig(updatedValues);
    setLocalStorage({ key: LocalStorageKey, value: updatedValues })
  }

  const handleSubmit = () => {
    const contact = textFieldsConfig.reduce((acc, current) => {
      return {...acc, [current.id]: current.value}
    }, {})
    dispatch(contactActions.postContact(contact))
  }

  return (
    <div className={styles.contactForm}>
      {textFieldsConfig.map((textFieldProps, key) => {
        const { fieldType, ...field } = omit(textFieldProps, ['touched', 'errorMessage', 'alternativeErrorMessage']);
        // * prevent console error, change from uncontrolled to controlled
        field.value = field.value ?? ''

        if (fieldType === 'area') {
          field.rows = 8
        }

        return (
          <TextField
            key={key}
            { ...field }
            className={styles.field}
            onChange={(value) => handleFieldChange (field.id, value)}
          />
        )
      })
      }
      <div className={styles.submitSection}>
        <Button
          className={classnames(styles.submitBtn, { [styles.submitBtnDisabled]: shouldDisableSubmit})}
          disabled={shouldDisableSubmit || isLoading}
          onClick={handleSubmit}
          flat
        >
          Submit {isLoading && <CircularProgress id="circular" />}
        </Button>
      </div>
    </div>
  )
}
