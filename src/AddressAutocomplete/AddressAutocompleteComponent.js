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
  submitButtonIsDisabled,
  isDropdownOpen,
  pinIcon,
  predictions,
  boundsReference,
  onSelect,
  onClickOutside,
  submitButtonStyles,
  error
}) => {
  return (
    <form onSubmit={onClickSubmitButton}>
      {customInput || (
        <Input
          placeholder={inputPlaceholder}
          value={inputValue}
          autoFocus={inputAutoFocus}
          handleOnChange={handleOnChange}
          error={error}
        />
      )}
      {customSubmitButton && <customSubmitButton />}
      {displayDefaultSubmitButton && (
        <SubmitButton
          isDisabled={submitButtonIsDisabled}
          userDefinedStyles={submitButtonStyles}
        />
      )}
      <AddressDropdown
        predictions={predictions}
        boundsReference={boundsReference}
        onSelect={onSelect}
        onClickOutside={onClickOutside}
        pinIcon={pinIcon}
      />
    </form>
  )
}

export default ReactGoogleAddressAutocomplete
