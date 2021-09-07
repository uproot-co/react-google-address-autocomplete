import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem 3rem;
  height: auto;
  opacity: ${(props) => (props.isDisabled ? 0.8 : 1)};
  // text-transform: none;
  // letter-spacing: 0;
  // max-width: 18.75rem;
`

const SubmitButton = ({
  isDisabled = false,
  userDefinedStyles = {},
  submitButtonText,
  onClick
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      style={{ ...userDefinedStyles }}
    >
      {submitButtonText || 'Search'}
    </Button>
  )
}

export default SubmitButton
