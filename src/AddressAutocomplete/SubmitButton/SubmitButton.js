import React from 'react'
import { Button } from '../styled-components'

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
