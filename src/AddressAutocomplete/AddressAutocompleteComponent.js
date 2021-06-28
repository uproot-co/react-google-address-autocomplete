import React, { useState, useEffect } from 'react'
import Input from './Input'
import AddressDropdown from './AddressDropdown'
import SubmitButton from './SubmitButton'
import styles from './AddressAutocomplete.module.css'

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
  onAddressSelected,
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
  const [clearX, setClearX] = useState(false)

  useEffect(() => {
    predictions.length > 1 ? setIsDropdownOpen(true) : setIsDropdownOpen(false)
  }, [predictions])

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
    console.log('handleToggle called from RGAA')
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
    value: inputAddressError || selectedAddress || inputValue,
    onFocus: () => setClearX(inputValue.length >= 1),
    onBlur: () => setClearX(false)
  }

  return (
    <div className={styles.inputContainer}>
      <span
        className={styles.inputFieldWrapper}
        style={toggleIcon && { display: 'flex' }}
      >
        {CustomInput ? (
          <CustomInput {...customInputProps} {...RGAAInputProps} />
        ) : (
          <Input
            {...RGAAInputProps}
            placeholder={inputPlaceholder}
            autoFocus={inputAutoFocus}
            error={inputAddressError}
            userDefinedStyles={inputStyles}
          />
        )}
        {toggleIcon && clearX && (
          <button
            onClick={handleToggle}
            style={{ display: 'inline-flex' }}
            type='button'
            className={styles.toggleButton}
          >
            {toggleIcon}
          </button>
        )}
        {useDefaultToggleIcon && (
          <button
            onClick={handleToggle}
            className={styles.iconBtn}
            type='button'
          >
            X
          </button>
        )}
      </span>
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
