import { InputProps } from '../types';
// import { IonLabel } from '@ionic/react';
import React, { FC } from 'react';
import styles from '../styles.module.scss';

const Label: FC<Pick<InputProps, 'label' | 'required'>> = ({ label, required }) => {
    return (
        <label className={styles.label}>
            {label}
            {required ? '*' : ''}
        </label>
    );
};

export default Label;
