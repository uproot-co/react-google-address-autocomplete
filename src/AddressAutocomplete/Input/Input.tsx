import { IconBtn, StyledInput, InputFieldWrapper } from './InputStyledComponents';
import { InputModeTypes, InputProps, InputStyleTypes, InputTypes } from './types';
import _noop from 'lodash/noop';
import ErrorOrDescription from './ErrorOrDescription';
import Label from './Label';
import React from 'react';

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
        <div>
            {label && <Label label={label} required={required} />}
            <InputFieldWrapper className={styleType}>
                <StyledInput
                    autoComplete='off'
                    name={name}
                    className={`${disabled && 'disabled'} ${icon && 'withIcon'} ${className}`}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    inputMode={inputMode}
                    disabled={disabled}
                    {...rest}
                />
                {icon && (
                    <IconBtn onClick={iconClickHandler} type='button'>
                        <div>{icon}</div>
                    </IconBtn>
                )}
            </InputFieldWrapper>
            <ErrorOrDescription description={description} showError={showError} errorMessage={errorMessage} />
        </div>
    );
};

export default Input;
