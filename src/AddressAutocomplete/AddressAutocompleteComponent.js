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
  defaultSubmitButtonIsDisabled,
  onClickSubmitButton,
  pinIcon,
  predictions,
  boundsReference,
  onSelectAddress,
  onClickOutside,
  error,
  inputStyles,
  addressDropdownStyles,
  submitButtonStyles
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(predictions.length)
  const [addressHasBeenSelected, setAddressHasBeenSelected] = useState(false)

  useEffect(() => {
    !addressHasBeenSelected && setIsDropdownOpen(predictions.length)
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
          userDefinedStyles={inputStyles}
        />
      )}
      {customSubmitButton && customSubmitButton}
      {displayDefaultSubmitButton && (
        <SubmitButton
          isDisabled={defaultSubmitButtonIsDisabled}
          userDefinedStyles={submitButtonStyles}
          onClick={onClickSubmitButton}
        />
      )}
      {isDropdownOpen ? (
        <AddressDropdown
          predictions={predictions}
          boundsReference={boundsReference}
          onSelect={onSelectAddress}
          setAddressHasBeenSelected={setAddressHasBeenSelected}
          onClickOutside={() => setIsDropdownOpen(false)}
          pinIcon={pinIcon}
          setIsDropdownOpen={setIsDropdownOpen}
          userDefinedStyles={addressDropdownStyles}
        />
      ) : null}
    </React.Fragment>
  )
}

export default ReactGoogleAddressAutocomplete
