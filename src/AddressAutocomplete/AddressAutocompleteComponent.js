import React from 'react'
import Input from './Input'
import AddressDropdown from './AddressDropdown'
import SubmitButton from './SubmitButton'

const ReactGoogleAddressAutocomplete = ({
  customInput,
  customSubmitButton,
  inputPlaceholder,
  inputValue,
  inputAutoFocus,
  handleOnChange,
  displayDefaultSubmitButton,
  onClickSubmitButton,
  submitButtonStyles,
  submitButtonIsDisabled,
  isDropdownOpen,
  pinIcon,
  predictions,
  boundsReference,
  onSelect,
  onClickOutside,
  error
}) => {
  return (
    <React.Fragment>
      {customInput || (
        <Input
          placeholder={inputPlaceholder}
          value={inputValue}
          autoFocus={inputAutoFocus}
          handleOnChange={handleOnChange}
          error={error}
        />
      )}
      {customSubmitButton && customSubmitButton}
      {displayDefaultSubmitButton && (
        <SubmitButton
          isDisabled={submitButtonIsDisabled}
          userDefinedStyles={submitButtonStyles}
          onClickSubmitButton={onClickSubmitButton}
        />
      )}
      <AddressDropdown
        predictions={predictions}
        boundsReference={boundsReference}
        onSelect={onSelect}
        onClickOutside={onClickOutside}
        pinIcon={pinIcon}
      />
    </React.Fragment>
  )
}

export default ReactGoogleAddressAutocomplete
