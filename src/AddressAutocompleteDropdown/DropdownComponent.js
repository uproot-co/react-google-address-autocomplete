import React, { useRef } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import _reverse from 'lodash/reverse'

const AddressDropdownComponent = ({
  predictions = [],
  boundsReference,
  onSelect,
  onClickOutside,
  pinIcon
}) => {
  const domRect = boundsReference.current?.getBoundingClientRect()
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
      {addresses.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              cursor: 'pointer'
            }}
          >
            {pinIcon && (
              <div style={{ marginRight: '5px', display: 'inline' }}>
                {pinIcon}
              </div>
            )}
            <span onClick={() => onSelect(item)}>{item.matchedAddress}</span>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default AddressDropdownComponent
