import { InputProps } from '../types';
import { isEmpty } from 'lodash';
import cn from 'classnames';
import React, { FC } from 'react';
import styles from '../styles.module.scss';

type Props = Pick<InputProps, 'description' | 'showError' | 'errorMessage'> & { error?: { [key: string]: string } };

const ErrorOrDescription: FC<Props> = ({ description, error, showError, errorMessage }) => {
    const isError = !isEmpty(error) || showError;
    let text = '';

    if (!!description && !isError) {
        text = description;
    } else if (isError) {
        text = error ? error['message'] : (errorMessage as string);
    }

    return <span className={cn(styles['input-footer-copy'], isError && styles.error, !!description && styles.description)}>{text}</span>;
};

export default ErrorOrDescription;
