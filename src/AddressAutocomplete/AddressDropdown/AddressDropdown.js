import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import _reverse from 'lodash/reverse'
import ReactDOM from 'react-dom'
import {
  AddressDropdownContainer,
  AddressDropdownDiv,
  Address,
  Icon
} from '../styled-components'

const AddressDropdown = ({
  predictions = [],
  boundsReference,
  onSelect,
  onClickOutside,
  pinIcon,
  setAddressHasBeenSelected,
  setIsDropdownOpen,
  userDefinedStyles = {}
}) => {
  const domRect = boundsReference?.current?.getBoundingClientRect()
  const dropdownDivRef = useRef(null)

  useOnClickOutside(onClickOutside, [dropdownDivRef])

  let [xPosition, yPosition] = [0, 0] // X & Y coordinates in which to position the dropdown

  let refWidth = 0
  let refHeight = 0
  let showAtBottom = true

  if (domRect) {
    const { x, y, width, height } = domRect
    const dropdownInitialHeight = 200

    xPosition = x
    yPosition = y
    refWidth = width
    refHeight = height

    // Check how close the component bounds are from the bottom of the page,
    // to determine the direction in which the dropdown should render, and order of matched addresses
    showAtBottom =
      window.innerHeight - (yPosition + height) >= dropdownInitialHeight
    predictions = !showAtBottom ? _reverse([...predictions]) : predictions
  }

  return ReactDOM.createPortal(
    <div
    // Adding styles inline here only because values are received as props
    >
      <AddressDropdownContainer
        style={{
          ...(showAtBottom
            ? { top: `${yPosition + refHeight}px` }
            : { bottom: `${window.innerHeight - yPosition}px` }),
          left: `${xPosition}px`,
          maxWidth: `${refWidth}px`
        }}
        ref={dropdownDivRef}
      >
        {predictions.map((item, index) => {
          return (
            <AddressDropdownDiv
              key={index}
              style={{
                cursor: 'pointer'
              }}
              onClick={() => onSelect(item)}
            >
              {pinIcon && <Icon>{pinIcon}</Icon>}
              <Address>{item.matchedAddress}</Address>
              <hr />
            </AddressDropdownDiv>
          )
        })}
      </AddressDropdownContainer>
    </div>,
    document.getElementById('root')
  )
}

export default AddressDropdown
