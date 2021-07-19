import React, { useState, useEffect, useRef } from 'react'
import Input from './Input'
import AddressDropdown from './AddressDropdown'
import SubmitButton from './SubmitButton'
import styles from './AddressAutocompleteComponent.module.css'

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

  const dropDownDivRef = useRef()

  return (
    <div>
      <div className={styles.addressAutocompleteWrapper}>
        <div className={styles.inputFieldWrapper}>
          <div
            className={
              (toggleIcon || useDefaultToggleIcon) && clearX
                ? styles.inputWithToggle
                : styles.input
            }
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
          </div>
          {toggleIcon && clearX && (
            <button
              onClick={handleToggle}
              type='button'
              className={styles.toggleButton}
            >
              <div className={styles.toggleIcon}>{toggleIcon}</div>
            </button>
          )}
          {useDefaultToggleIcon && clearX && (
            <button
              onClick={handleToggle}
              className={styles.toggleButton}
              type='button'
            >
              <div className={styles.toggleIcon}>{'\u24E7'}</div>
            </button>
          )}
        </div>
        {customSubmitButton && customSubmitButton}
        {displayDefaultSubmitButton && (
          <SubmitButton
            isDisabled={defaultSubmitButtonIsDisabled}
            userDefinedStyles={submitButtonStyles}
            onClick={handleOnSubmit}
          />
        )}
      </div>
      <div ref={dropDownDivRef}>
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
    </div>
  )
}

export default ReactGoogleAddressAutocomplete
