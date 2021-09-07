import React from 'react'
import styled from 'styled-components'

const ToggleButton = styled.button`
  font-size: 1.3rem;
  border: none;
  background: none;
`

const ToggleIconDiv = styled.div`
  position: relative;
  height: 100%;
  margin-top: 50%;
  transform: translate(-50%);
  text-align: center;
  z-index: 1000;
  cursor: pointer;
`

const Toggle = ({ handleToggle, toggleIcon }) => {
  return (
    <ToggleButton onClick={handleToggle} type='button'>
      <ToggleIconDiv>{toggleIcon}</ToggleIconDiv>
    </ToggleButton>
  )
}

export default Toggle
