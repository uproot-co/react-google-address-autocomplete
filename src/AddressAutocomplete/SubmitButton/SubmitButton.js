import React from 'react'

const defaultSubmitButtonStyles = {
  padding: '5px',
  margin: '5px',
  fontWeight: 'bold',
  borderRadius: '5px'
}

const SubmitButton = ({
  isDisabled,
  userDefinedStyles,
  onClickSubmitButton
}) => {
  return (
    <button
      onClick={onClickSubmitButton}
      disabled={isDisabled}
      style={userDefinedStyles || defaultSubmitButtonStyles}
    >
      Search
    </button>
  )
}

export default SubmitButton
