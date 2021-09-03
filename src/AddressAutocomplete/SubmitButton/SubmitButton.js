import React from 'react'
import styled from 'styled-components'

// opacity: background: ${isDisabled ? 0.8 : 1};

const Button = styled.button`
  width: 20%;
  max-width: 100px;
  opacity: ${(props) => (props.isDisabled ? 0.8 : 1)};
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
