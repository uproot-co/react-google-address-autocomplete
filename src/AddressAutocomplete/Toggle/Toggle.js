import React from 'react'
import { ToggleButton, ToggleIconDiv } from '../styled-components'

const Toggle = ({ handleToggle, toggleIcon }) => {
  return (
    <ToggleButton onClick={handleToggle} type='button'>
      <ToggleIconDiv>{toggleIcon}</ToggleIconDiv>
    </ToggleButton>
  )
}

export default Toggle
