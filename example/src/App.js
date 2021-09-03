import React from 'react'

import ReactGoogleAddressAutocomplete from 'react-google-address-autocomplete'
import 'react-google-address-autocomplete/dist/index.css'
// import styles from './App.module.css'
import styled from 'styled-components'

const fetchPredictions = () => {
  return [
    { matchedAddress: '123 Main Street, Anytown, CO, USA' },
    { matchedAddress: '456 Back Alley, Anothertown, UT, USA' },
    { matchedAddress: '789 Route 66, Outtahere, OK, USA' }
  ]
}

const onClickSubmitButton = () => {
  console.log('Submit button clicked')
}

const AddressAutocompleteComponent = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 30vh;
`

const App = () => {
  return (
    <AddressAutocompleteComponent className='styles.addressAutocomplete'>
      <ReactGoogleAddressAutocomplete
        fetchPredictions={fetchPredictions}
        onClickSubmitButton={onClickSubmitButton}
        displayDefaultSubmitButton={true}
        useDefaultToggleIcon={true}
      />
    </AddressAutocompleteComponent>
  )
}

export default App
