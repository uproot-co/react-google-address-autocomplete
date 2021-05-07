import React from 'react'

const defaultSubmitButtonStyles = {
  padding: '5px 15px',
  margin: '5px',
  fontWeight: 'bold',
  borderRadius: '5px',
  backgroundColor: 'grey',
  border: '1px solid black',
  color: 'white'
}

const SubmitButton = ({ isDisabled, userDefinedStyles, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={userDefinedStyles || defaultSubmitButtonStyles}
    >
      Search
    </button>
  )
}

export default SubmitButton
