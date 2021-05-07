import React from 'react'

const SubmitButton = ({ isDisabled, submitButtonStyles, onClick }) => {
  const userDefinedStyles = {
    opacity: `${isDisabled ? '.3' : '1'}`,
    ...submitButtonStyles
  }
  const defaultSubmitButtonStyles = {
    padding: '5px 15px',
    margin: '5px',
    fontWeight: 'bold',
    borderRadius: '5px',
    backgroundColor: 'grey',
    color: 'white',
    border: '1px solid black',
    opacity: `${isDisabled ? '.3' : '1'}`
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={submitButtonStyles ? userDefinedStyles : defaultSubmitButtonStyles}
    >
      Search
    </button>
  )
}

export default SubmitButton
