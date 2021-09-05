import React, { useState, useEffect, useRef } from 'react'
import Input from './Input'
import AddressDropdown from './AddressDropdown'
import SubmitButton from './SubmitButton'
import styled from 'styled-components'

const AddressAutocompleteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const InputFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  // border-bottom: 1px solid black;
  margin-right: 2px;
`

const InputDiv = styled.div`
  width: ${(props) =>
    (props.toggleIcon || props.useDefaultToggleIcon) && clearX
      ? '87.6%'
      : '100%'};
  padding-right: 1.5rem;
  padding-top: 0.65rem;
  overflow: hidden;
`

const ToggleButton = styled.button`
  padding: 0.6rem 0.32rem;
  font-size: 1.3rem;
  outline: none;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: none;
`

const ToggleIconDiv = styled.div`
  border-radius: 50%;
  position: relative;
  height: 100%;
  // color: rgb(79, 75, 74);
  text-align: center;
  /* right: 1rem;
  top: 0.8rem; */
  z-index: 1000;
  cursor: pointer;
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
        <InputFieldWrapper>
          <InputDiv>
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
          </InputDiv>
          {toggleIcon && clearX && (
            <ToggleButton onClick={handleToggle} type='button'>
              <ToggleIconDiv>{toggleIcon}</ToggleIconDiv>
            </ToggleButton>
          )}
          {useDefaultToggleIcon && clearX && (
            <ToggleButton onClick={handleToggle} type='button'>
              <ToggleIconDiv>{'\u24E7'}</ToggleIconDiv>
            </ToggleButton>
          )}
        </InputFieldWrapper>
        {customSubmitButton && customSubmitButton}
        {displayDefaultSubmitButton && (
          <SubmitButton
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
