import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import _reverse from 'lodash/reverse'
import styled from 'styled-components'

const AddressDropdownContainer = styled.div`
  position: absolute;
  padding-left: 10px;
  width: 100%;
`

const AddressDropdownDiv = styled.div`
  width: 80%;
`

const Address = styled.div`
  color: black;
  width: 80%;
  padding: 0 10px;
  display: inline;
`
const Icon = styled.div`
  margin-right: 5px;
  display: inline;
`

const AddressDropdown = ({
  predictions = [],
  boundsReference,
  onSelect,
  onClickOutside,
  pinIcon = 'x',
  setAddressHasBeenSelected,
  setIsDropdownOpen,
  userDefinedStyles = {}
}) => {
  const domRect = boundsReference?.current?.getBoundingClientRect()
  const dropdownDivRef = useRef(null)

  useOnClickOutside(onClickOutside, [dropdownDivRef])

  const [showAtBottom, showAtTop, threshold] = [60, -174, 250] // Offset of the direction at which to show dropdown
  let [xPosition, yPosition] = [0, 0] // X & Y coordinates in which to position the dropdown

  let offset = 0,
    refWidth = 0,
    addresses = predictions

  if (domRect) {
    const { x, y, width } = domRect

    xPosition = x
    yPosition = y
    refWidth = width

    // Check how close the component bounds are from the bottom of the page,
    // to determine the direction in which the dropdown should render, and order of matched addresses
    offset =
      window.innerHeight - yPosition <= threshold ? showAtTop : showAtBottom
    addresses = Math.sign(offset) === -1 ? _reverse([...addresses]) : addresses
  }

  return (
    <div
      // Adding styles inline here only because values are received as props
      style={{
        top: `${yPosition + offset}px`,
        left: `${xPosition}px`,
        maxWidth: `${refWidth}px`
      }}
      ref={dropdownDivRef}
    >
      <AddressDropdownContainer
        className='styles.addressDropdownContainer'
        style={{ ...userDefinedStyles }}
      >
        {addresses.map((item, index) => {
          return (
            <AddressDropdownDiv
              key={index}
              style={{
                cursor: 'pointer'
              }}
            >
              {pinIcon && <Icon>{pinIcon}</Icon>}
              <Address
                onClick={() => {
                  onSelect(item)
                }}
              >
                {item.matchedAddress}
              </Address>
              <hr />
            </AddressDropdownDiv>
          )
        })}
      </AddressDropdownContainer>
    </div>
  )
}

export default AddressDropdown
