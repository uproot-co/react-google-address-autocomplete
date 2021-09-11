import React from 'react'
import {
  DefaultInputFieldWrapper,
  DefaultInputDiv,
  StyledInput
} from '../styled-components'

const defaultStyles = {
  paddingBottom: '5px',
  fontSize: '1rem'
}

const DefaultInput = ({
  placeholder = 'Please enter an address',
  value = '',
  autoFocus = true,
  isDisabled,
  onChange,
  userDefinedStyles
}) => {
  return (
    <DefaultInputFieldWrapper>
      <DefaultInputDiv>
        <StyledInput
          style={userDefinedStyles || defaultStyles}
          type='text'
          value={value}
          autoFocus={autoFocus || true}
          disabled={isDisabled}
          placeholder={placeholder}
          name='search_address'
          onChange={onChange}
          autoComplete='off'
        />
      </DefaultInputDiv>
    </DefaultInputFieldWrapper>
  )
}

export default DefaultInput
