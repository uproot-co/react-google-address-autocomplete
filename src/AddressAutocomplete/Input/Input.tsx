import {
  InputModeTypes,
  InputProps,
  InputStyleTypes,
  InputTypes,
} from './types';
import _noop from 'lodash/noop';
import cn from 'classnames';
import ErrorOrDescription from './ErrorOrDescription';
import Label from './Label';
import React from 'react';
import styles from './styles.module.scss';

const Input: React.FC<InputProps> = ({
  value,
  name,
  label,
  className,
  errorMessage = 'Invalid Input',
  showError,
  description,
  styleType = InputStyleTypes.Outline,
  type = InputTypes.Text,
  inputMode = InputModeTypes.Text,
  handleChange,
  required,
  disabled,
  icon,
  iconClickHandler = _noop,
  ...rest
}) => {
  return (
    <div className={styles.inputContainer}>
      {label && <Label label={label} required={required} />}
      <span
        className={cn(styles.inputFieldWrapper, styles[styleType])}
      >
        <input
          autoComplete='off'
          name={name}
          className={cn(
            styles.input,
            disabled && styles.disabled,
            icon && styles.withIcon,
            className
          )}
          type={type}
          value={value}
          onChange={handleChange}
          inputMode={inputMode}
          disabled={disabled}
          {...rest}
        />
        {icon && (
          <button
            className={styles.iconBtn}
            onClick={iconClickHandler}
            type='button'
          >
            <div>{icon}</div>
          </button>
        )}
      </span>
      <ErrorOrDescription
        description={description}
        showError={showError}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Input;
