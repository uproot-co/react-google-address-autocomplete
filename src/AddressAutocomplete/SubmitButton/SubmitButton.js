import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem 3rem;
  height: auto;
  margin-left: 5px;
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
