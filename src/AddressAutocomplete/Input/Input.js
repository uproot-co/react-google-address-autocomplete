import React from 'react'

const Input = ({
  placeholder,
  value = '',
  autoFocus = true,
  isDisabled,
  onChange,
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
      onChange={onChange}
      autoComplete='off'
    />
  )
}

export default Input
