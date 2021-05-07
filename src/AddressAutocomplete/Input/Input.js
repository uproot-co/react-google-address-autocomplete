import React from 'react'

const defaultInputStyles = {
  padding: '5px',
  margin: '5px',
  borderRadius: '5px',
  border: '1px solid black',
  width: '50%'
}

const Input = ({
  placeholder,
  value = '',
  autoFocus = true,
  isDisabled,
  onInputChange,
  error,
  userDefinedStyles
}) => {
  return (
    <input
      style={userDefinedStyles || defaultInputStyles}
      type='text'
      value={value}
      autoFocus={autoFocus || true}
      disabled={isDisabled}
      placeholder='Search officials by address (street, city, state)'
      name='search_address'
      error={error}
      onChange={onInputChange}
      autoComplete='off'
    />
  )
}

export default Input
