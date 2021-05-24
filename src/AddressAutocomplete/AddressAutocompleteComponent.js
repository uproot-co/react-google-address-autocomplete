import React, { useState, useEffect } from 'react'
import Input from './Input'
import AddressDropdown from './AddressDropdown'
import SubmitButton from './SubmitButton'

const ReactGoogleAddressAutocomplete = ({
  boundsReference,
  fetchPredictions, // required function that accepts the inputValue stored in this component and returns an array of objects, each with a "matchedAddress" property
  customInput,
  onChangeName, // required only if using custom input -- tells this component the name of the custom input's onChange function
  userOnInputChange, // optional --   any additional functionality that an input change needs to trigger
  inputPlaceholder,
  inputAutoFocus = true,
  customSubmitButton,
  displayDefaultSubmitButton,
  defaultSubmitButtonIsDisabled,
  onClickSubmitButton,
  pinIcon,
  inputStyles,
  addressDropdownStyles,
  submitButtonStyles,
  error
}) => {
  const [inputAddressError, setInputAddressError] = useState('')
  const [selectedAddress, setSelectedAddress] = useState('')
  const [predictions, setPredictions] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    predictions.length > 1 ? setIsDropdownOpen(true) : setIsDropdownOpen(false)
  }, [predictions])

  useEffect(() => {
    if (inputValue) {
      const getPredictions = async () => {
        const predictions = await fetchPredictions(inputValue)
        predictions && setPredictions(predictions)
      }
      !selectedAddress && getPredictions()
      console.log(inputValue) // REMOVE LATER
    }
  }, [inputValue, fetchPredictions])

  useEffect(() => {
    error && console.log(error)
  }, [error])

  const handleOnChange = (event) => {
    userOnInputChange && userOnInputChange()
    setInputAddressError('')
    setSelectedAddress('')
    if (event?.target) setInputValue((event?.target).value)
  }

  const handleAddressSelected = (address) => {
    setInputValue(address.matchedAddress)
    setSelectedAddress(address.matchedAddress)
    setPredictions([])
    setIsDropdownOpen(false)
  }

  const handleOnSubmit = () => {
    inputValue
      ? onClickSubmitButton(inputValue)
      : setInputAddressError('Please enter an address')
  }

  const renderCustomInput = (input) => {
    const revisedCustomInputProps = {
      [onChangeName]: handleOnChange // assign handleOnChange function to whatever customInput's onChange function is called
    }
    return React.cloneElement(input, { ...revisedCustomInputProps })
  }

  return (
    <div>
      {customInput && renderCustomInput(customInput)}
      {!customInput && (
        <Input
          placeholder={inputPlaceholder}
          value={inputAddressError || selectedAddress || inputValue}
          autoFocus={inputAutoFocus}
          onChange={handleOnChange}
          error={inputAddressError}
          userDefinedStyles={inputStyles}
        />
      )}
      {customSubmitButton && customSubmitButton}
      {displayDefaultSubmitButton && (
        <SubmitButton
          isDisabled={defaultSubmitButtonIsDisabled}
          userDefinedStyles={submitButtonStyles}
          onClick={handleOnSubmit}
        />
      )}
      {isDropdownOpen ? (
        <AddressDropdown
          predictions={predictions}
          boundsReference={boundsReference}
          onSelect={handleAddressSelected}
          onClickOutside={() => setIsDropdownOpen(false)}
          pinIcon={pinIcon}
          setIsDropdownOpen={setIsDropdownOpen}
          userDefinedStyles={addressDropdownStyles}
        />
      ) : null}
    </div>
  )
}

export default ReactGoogleAddressAutocomplete
