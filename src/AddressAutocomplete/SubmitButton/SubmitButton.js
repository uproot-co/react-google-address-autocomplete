import React from 'react'

const SubmitButton = ({
  isDisabled,
  userDefinedStyles = {},
  submitButtonText,
  onClick
}) => {
  const styles = {
    opacity: `${isDisabled ? '.5' : '1'}`,
    ...userDefinedStyles
  }

  return (
    <button onClick={onClick} disabled={isDisabled} style={styles}>
      {submitButtonText || 'Search'}
    </button>
  )
}

export default SubmitButton
