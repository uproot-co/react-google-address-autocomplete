import { InputProps } from '../types';
import { StyledLabel } from '../InputStyledComponents';
import React, { FC } from 'react';

const Label: FC<Pick<InputProps, 'label' | 'required'>> = ({ label, required }) => {
    return (
        <StyledLabel>
            {label}
            {required ? '*' : ''}
        </StyledLabel>
    );
};

export default Label;
