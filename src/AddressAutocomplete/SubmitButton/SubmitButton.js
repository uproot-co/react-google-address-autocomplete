import React from 'react'
import styles from './SubmitButton.module.css'

const SubmitButton = ({
  isDisabled,
  userDefinedStyles = {},
  submitButtonText,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={{ ...userDefinedStyles }}
      className={isDisabled ? styles.submitButtonDisabled : styles.submitButton}
    >
      {submitButtonText || 'Search'}
    </button>
  )
}

export default SubmitButton
