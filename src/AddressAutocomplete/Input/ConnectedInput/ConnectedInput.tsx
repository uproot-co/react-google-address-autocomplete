import { ConnectedInputProps, InputModeTypes, InputTypes } from '../types';
import { Controller, useFormContext } from 'react-hook-form';
import { isEmpty } from 'lodash';
import Input from '../Input';
import React, { FC } from 'react';

const ConnectedInput: FC<ConnectedInputProps> = ({
    registerOptions,
    required,
    name,
    label,
    description,
    type = InputTypes.Text,
    inputMode = InputModeTypes.Text,
    defaultValue = '',
    ...rest
}) => {
    const { errors, control } = useFormContext();
    const requiredFieldWarningTxt = 'This is Required';

    if (registerOptions?.required) registerOptions.required = requiredFieldWarningTxt;
    if (required && !registerOptions) registerOptions = { required: requiredFieldWarningTxt };

    return (
        <Controller
            name={name}
            render={({ onChange, value }) => (
                <Input
                    name={name}
                    label={label}
                    value={value}
                    required={required || !!registerOptions?.required}
                    handleChange={onChange}
                    type={type}
                    inputMode={inputMode}
                    description={description}
                    showError={!isEmpty(errors[name])}
                    errorMessage={errors[name]?.message}
                    {...rest}
                />
            )}
            control={control}
            rules={registerOptions}
            defaultValue={defaultValue}
        />
    );
};

export default ConnectedInput;
