import React from 'react'
import styled from 'styled-components'

const InputFieldWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  border: none;
  padding: 0;
  bottom: 0;
`

const InputDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding-start: 0.5rem;
  padding-top: 0.65rem;
  padding-bottom: 0.5rem;
  position: absolute;
  bottom: 0;
`

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

export default DefaultInput
