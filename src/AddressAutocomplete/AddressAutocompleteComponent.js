import React, { useState, useEffect } from 'react'
import DefaultInput from './Input'
import AddressDropdown from './AddressDropdown'
import Toggle from './Toggle'
import DefaultSubmitButton from './SubmitButton'
import styled from 'styled-components'

const AddressAutocompleteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const InputWrapper = styled.div`
  width: 90%;
`

const ReactGoogleAddressAutocomplete = ({
  boundsReference,
  fetchPredictions, // required function that accepts the inputValue stored in this component and returns an array of objects, each with a "matchedAddress" property
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
  displayDefaultSubmitButton,
  defaultSubmitButtonIsDisabled,
  selectedAddress: selectedAddressFromUser = '',
  onAddressSelected,
  onClickSubmitButton,
  pinIcon,
  inputStyles,
  submitButtonStyles,
  error
}) => {
  const [inputAddressError, setInputAddressError] = useState('')
  const [selectedAddress, setSelectedAddress] = useState('')
  const [predictions, setPredictions] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [clearX, setClearX] = useState(false)

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
    error && console.log(error)
  }, [error])

  useEffect(() => {
    selectedAddress.length &&
      onAddressSelected &&
      onAddressSelected(selectedAddress)
  }, [selectedAddress])

  const handleOnChange = (event) => {
    userOnInputChange && userOnInputChange()
    setInputAddressError('')
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
      : setInputAddressError('Please enter an address')
  }

  const RGAAInputProps = {
    [onChangeName]: handleOnChange,
    value: inputAddressError || selectedAddress || inputValue
  }

  return (
    <div>
      <AddressAutocompleteWrapper>
        <InputWrapper>
          {CustomInput ? (
            <CustomInput {...customInputProps} {...RGAAInputProps} />
          ) : (
            <DefaultInput
              {...RGAAInputProps}
              placeholder={inputPlaceholder}
              autoFocus={inputAutoFocus}
              error={inputAddressError}
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
        {customSubmitButton && customSubmitButton}
        {displayDefaultSubmitButton && (
          <DefaultSubmitButton
            isDisabled={defaultSubmitButtonIsDisabled}
            userDefinedStyles={submitButtonStyles}
            onClick={handleOnSubmit}
          />
        )}
      </AddressAutocompleteWrapper>

      {isDropdownOpen ? (
        <AddressDropdown
          predictions={predictions}
          boundsReference={boundsReference}
          onSelect={handleAddressSelected}
          onClickOutside={() => setIsDropdownOpen(false)}
          pinIcon={pinIcon}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      ) : null}
    </div>
  )
}

export default ReactGoogleAddressAutocomplete
