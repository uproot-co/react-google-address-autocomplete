import React from 'react'

// required props:  handleOnChange, handleOnSubmit(?)
// optional props: placeholder, autoFocus, disabled, error(?)
// to style --

const Input = ({
  placeholder,
  value = '',
  autoFocus = true,
  handleOnChange,
  handleOnSubmit,
  disabled,
  name,
  error
}) => {
  return (
    <React.Fragment>
      <input
        type='text'
        name='search_address'
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        disabled={disabled}
        onChange={(e) => handleOnChange(e.target.value)}
        onSubmit={handleOnSubmit}
        error={error}
      />
      <button onClick={(e) => {}} disabled={value.length}>
        <span>Search</span>
      </button>
    </React.Fragment>
  )
}

export default Input;
