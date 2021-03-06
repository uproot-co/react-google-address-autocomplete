import React, { useState, useEffect, useRef } from 'react'
import DefaultInput from './DefaultInput'
import AddressDropdown from './AddressDropdown'
import Toggle from './Toggle'
import DefaultSubmitButton from './SubmitButton'
import {
  AddressAutocompleteWrapper,
  InputFieldWrapper,
  InputWrapper
} from './styled-components'

const ReactGoogleAddressAutocomplete = ({
  fetchPredictions, // required function that accepts an inputValue (string) and returns an array of objects, each with a "matchedAddress" property
  CustomInput,
  customInputProps,
  onChangeName = 'onChange', // optional -- only necessary if custom input's onChange function is called something other than onChange
  userOnInputChange, // optional --   any additional functionality that an input change needs to trigger
  inputPlaceholder,
  inputAutoFocus = true,
  toggleIcon,
  userOnToggle,
  useDefaultToggleIcon = false,
  customSubmitButton,
  displayDefaultSubmitButton = false,
  defaultSubmitButtonIsDisabled,
  selectedAddress: selectedAddressFromUser = '',
  onAddressSelected,
  onClickSubmitButton,
  pinIcon,
  inputStyles,
  submitButtonStyles,
  addressDropdownStyles,
  addressDropdownOnHoverStyles,
  inputErrorMessage = 'Please enter an address'
}) => {
  const [inputValue, setInputValue] = useState('')
  const [selectedAddress, setSelectedAddress] = useState('')
  const [inputAddressError, setInputAddressError] = useState('')
  const [placeholder, setPlaceholder] = useState(inputPlaceholder)
  const [predictions, setPredictions] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [clearX, setClearX] = useState(false)

  const AddressDropdownRef = useRef(null)

  useEffect(() => {
    predictions.length > 1 ? setIsDropdownOpen(true) : setIsDropdownOpen(false)
  }, [predictions])

  useEffect(() => {
    if (selectedAddressFromUser) {
      setInputValue(selectedAddressFromUser)
      setSelectedAddress(selectedAddressFromUser)
    }
  }, [selectedAddressFromUser])

  useEffect(() => {
    setClearX(inputValue.length >= 1)
    if (inputValue) {
      const getPredictions = async () => {
        const predictions = await fetchPredictions(inputValue)
        predictions && setPredictions(predictions)
      }
      !selectedAddress && getPredictions()
    }
  }, [inputValue])

  useEffect(() => {
    selectedAddress.length &&
      onAddressSelected &&
      onAddressSelected(selectedAddress)
  }, [selectedAddress])

  const handleOnChange = (event) => {
    userOnInputChange && userOnInputChange()
    setInputAddressError('')
    setPlaceholder(inputPlaceholder)
    setSelectedAddress('')
    if (event?.target) setInputValue(event.target.value)
  }

  const handleAddressSelected = (address) => {
    setInputValue(address.matchedAddress)
    setSelectedAddress(address.matchedAddress)
    setPredictions([])
    setIsDropdownOpen(false)
  }

  const handleToggle = () => {
    setSelectedAddress('')
    setInputValue('')
    userOnToggle && userOnToggle()
  }

  const handleOnSubmit = () => {
    inputValue
      ? onClickSubmitButton(inputValue)
      : setPlaceholder(inputErrorMessage)
  }

  const RGAAInputProps = {
    [onChangeName]: handleOnChange,
    value: inputAddressError || selectedAddress || inputValue
  }

  return (
    <AddressAutocompleteWrapper>
      <InputFieldWrapper
        usingCustomInput={CustomInput && true}
        ref={AddressDropdownRef}
      >
        <InputWrapper
          toggleIcon={toggleIcon}
          useDefaultToggleIcon={useDefaultToggleIcon}
        >
          {CustomInput ? (
            <CustomInput {...customInputProps} {...RGAAInputProps} />
          ) : (
            <DefaultInput
              {...RGAAInputProps}
              placeholder={placeholder}
              autoFocus={inputAutoFocus}
              userDefinedStyles={inputStyles}
            />
          )}
        </InputWrapper>
        {toggleIcon && clearX && (
          <Toggle handleToggle={handleToggle} toggleIcon={toggleIcon} />
        )}
        {useDefaultToggleIcon && clearX && (
          <Toggle handleToggle={handleToggle} toggleIcon={'\u24E7'} />
        )}
      </InputFieldWrapper>
      {customSubmitButton && customSubmitButton}

      {displayDefaultSubmitButton && (
        <DefaultSubmitButton
          isDisabled={defaultSubmitButtonIsDisabled}
          userDefinedStyles={submitButtonStyles}
          onClick={handleOnSubmit}
        />
      )}

      {isDropdownOpen ? (
        <AddressDropdown
          predictions={predictions}
          boundsReference={AddressDropdownRef}
          onSelect={handleAddressSelected}
          onClickOutside={() => setIsDropdownOpen(false)}
          pinIcon={pinIcon}
          setIsDropdownOpen={setIsDropdownOpen}
          userDefinedStyles={addressDropdownStyles}
          userDefinedOnHoverStyles={addressDropdownOnHoverStyles}
        />
      ) : null}
    </AddressAutocompleteWrapper>
  )
}

export default ReactGoogleAddressAutocomplete
