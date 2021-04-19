import { InputFooterCopy } from '../InputStyledComponents';
import { InputProps } from '../types';
import { isEmpty } from 'lodash';
import React, { FC } from 'react';

type Props = Pick<InputProps, 'description' | 'showError' | 'errorMessage'> & { error?: { [key: string]: string } };

const ErrorOrDescription: FC<Props> = ({ description, error, showError, errorMessage }) => {
    const isError = !isEmpty(error) || showError;
    let text = '';

    if (!!description && !isError) {
        text = description;
    } else if (isError) {
        text = error ? error['message'] : (errorMessage as string);
    }

    return <InputFooterCopy className={`{${isError && 'error'} ${!!description && 'description'}`}>{text}</InputFooterCopy>;
};

export default ErrorOrDescription;
