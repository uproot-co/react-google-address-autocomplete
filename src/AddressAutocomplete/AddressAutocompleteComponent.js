import React, { useState, useEffect } from 'react'
import Input from './Input'
import AddressDropdown from './AddressDropdown'
import SubmitButton from './SubmitButton'

const ReactGoogleAddressAutocomplete = ({
  customInput,
  customSubmitButton,
  inputPlaceholder,
  inputAutoFocus = true,
  displayDefaultSubmitButton,
  defaultSubmitButtonIsDisabled,
  onClickSubmitButton,
  pinIcon,
  fetchPredictions, // required function that accepts the inputValue stored in this component and returns an array of objects, each with a "matchedAddress" property
  boundsReference,
  error,
  inputStyles,
  addressDropdownStyles,
  submitButtonStyles,
  children
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
    const getPredictions = async () => {
      const predictions = await fetchPredictions(inputValue)
      predictions && setPredictions(predictions)
    }
    !selectedAddress && getPredictions()
  }, [inputValue, fetchPredictions])

  useEffect(() => {
    error && console.log(error)
  }, [error])

  const handleOnchange = (event) => {
    console.log(event.target.value)
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

  // object of props to pass to customInput, to overwrite/add to its existing props as necessary
  const replacementInputProps = {
    onIonChange: (e) => console.log(e.target.value)
  }

  return (
    <React.Fragment>
      {customInput && // render customInput and pass in props object
        React.Children.map(customInput, (input) =>
          React.cloneElement(input, { ...replacementInputProps }, null)
        )}
      {!customInput && (
        <Input
          placeholder={inputPlaceholder}
          value={inputAddressError || selectedAddress || inputValue}
          autoFocus={inputAutoFocus}
          onInputChange={handleOnchange}
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
    </React.Fragment>
  )
}

export default ReactGoogleAddressAutocomplete
