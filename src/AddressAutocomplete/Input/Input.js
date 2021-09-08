import React from 'react'
import styled from 'styled-components'

const InputFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.25rem;
  overflow: hidden;

  &.outline {
    border: 0.0625rem solid #808289;
  }
`

const InputDiv = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  filter: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px rgb(255, 255, 255) inset;
    -webkit-box-shadow: 0 0 0 1000px rgb(255, 255, 255) inset;
  }
`

const defaultStyles = {
  borderBottom: '1px solid black',
  paddingBottom: '5px',
  fontSize: '1.3rem'
}

const Input = ({
  placeholder = 'Please enter an address',
  value = '',
  autoFocus = true,
  isDisabled,
  onChange,
  error,
  userDefinedStyles
}) => {
  return (
    <InputFieldWrapper>
      <InputDiv>
        <StyledInput
          style={userDefinedStyles || defaultStyles}
          type='text'
          value={value}
          autoFocus={autoFocus || true}
          disabled={isDisabled}
          placeholder={placeholder}
          name='search_address'
          error={error}
          onChange={onChange}
          autoComplete='off'
        />
      </InputDiv>
    </InputFieldWrapper>
  )
}

export default Input
