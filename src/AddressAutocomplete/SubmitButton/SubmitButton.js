import React from 'react'

const defaultSubmitButtonStyles = {
  padding: '5px',
  margin: '5px',
  fontWeight: 'bold',
  borderRadius: '5px'
}

const SubmitButton = ({ isDisabled, userDefinedStyles }) => {
  return (
    <button
      type='submit'
      disabled={isDisabled}
      style={userDefinedStyles || defaultSubmitButtonStyles}
    >
      Submit
    </button>
  )
}

export default SubmitButton
