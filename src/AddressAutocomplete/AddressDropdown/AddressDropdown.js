import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import _reverse from 'lodash/reverse'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const AddressDropdownContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fefefe;
  border: 1px solid #e6e6e6;
  border-radius: 0 0 3px 3px;
  min-width: 250px;
`

const AddressDropdownDiv = styled.div`
  border-bottom: 1px solid #e6e6e6;
  color: #383a3e;
  padding: 8px 5px;
  font-size: 0.88rem;
  display: inline-flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #84aea9;
    color: #fff;
  }
`
const Address = styled.div`
  white-space: nowrap;
  flex-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 30px);
`
const Icon = styled.div`
  margin-right: 5px;
  font-size: 1.4rem;
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
            >
              {pinIcon && <Icon>{pinIcon}</Icon>}
              <Address onClick={() => onSelect(item)}>
                {item.matchedAddress}
              </Address>
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
