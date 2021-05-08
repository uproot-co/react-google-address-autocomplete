import React from 'react'

const Input = ({
  placeholder,
  value = '',
  autoFocus = true,
  isDisabled,
  onInputChange,
  error,
  userDefinedStyles = {}
}) => {
  return (
    <input
      style={userDefinedStyles}
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
