import React, { useState, useEffect } from 'react'
import Input from './Input'
import AddressDropdown from './AddressDropdown'
import SubmitButton from './SubmitButton'

const ReactGoogleAddressAutocomplete = ({
  customInput,
  customSubmitButton,
  inputPlaceholder,
  inputValue,
  inputAutoFocus,
  handleOnInputChange,
  displayDefaultSubmitButton,
  onClickSubmitButton,
  submitButtonStyles,
  submitButtonIsDisabled,
  pinIcon,
  predictions,
  boundsReference,
  onSelectAddress,
  onClickOutside,
  error
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(predictions.length)

  useEffect(() => {
    setIsDropdownOpen(predictions.length)
  }, [predictions])

  return (
    <React.Fragment>
      {customInput || (
        <Input
          placeholder={inputPlaceholder}
          value={inputValue}
          autoFocus={inputAutoFocus}
          onInputChange={handleOnInputChange}
          error={error}
        />
      )}
      {customSubmitButton && customSubmitButton}
      {displayDefaultSubmitButton && (
        <SubmitButton
          isDisabled={submitButtonIsDisabled}
          userDefinedStyles={submitButtonStyles}
          onClick={onClickSubmitButton}
        />
      )}
      {isDropdownOpen && (
        <AddressDropdown
          predictions={predictions}
          boundsReference={boundsReference}
          onSelect={onSelectAddress}
          onClickOutside={() => setIsDropdownOpen(false)}
          pinIcon={pinIcon}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </React.Fragment>
  )
}

export default ReactGoogleAddressAutocomplete
