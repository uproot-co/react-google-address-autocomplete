import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  overflow: hidden;
`

const defaultStyles = {
  borderBottom: '1px solid black',
  paddingStart: '0.5rem',
  paddingTop: '0.65rem',
  paddingBottom: '0.5rem'
}

const Input = ({
  placeholder,
  value = '',
  autoFocus = true,
  isDisabled,
  onChange,
  error,
  userDefinedStyles
}) => {
  return (
    <StyledInput
      style={userDefinedStyles || defaultStyles}
      type='text'
      value={value}
      autoFocus={autoFocus || true}
      disabled={isDisabled}
      placeholder='Search officials by address (street, city, state)'
      name='search_address'
      error={error}
      onChange={onChange}
      autoComplete='off'
    />
  )
}

export default Input
