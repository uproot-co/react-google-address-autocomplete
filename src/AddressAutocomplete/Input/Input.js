import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`

const defaultStyles = {
  borderBottom: '1px solid black',
  paddingBottom: '5px',
  fontSize: '1.3rem'
}

// {
//   useDefaultToggleIcon && clearX && (
//     <ToggleButton onClick={handleToggle} type='button'>
//       <ToggleIconDiv>{'\u24E7'}</ToggleIconDiv>
//     </ToggleButton>
//   )
// }

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
  )
}

export default Input
